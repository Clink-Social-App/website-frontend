const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Updated Security Middleware
// 1. Basic security headers with Helmet and updated CSP
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: [
                "'self'",
                "http://localhost:3000",
                "https://clink.netlify.app",
                "https://clinkapp.xyz",
                "https://www.clinkapp.xyz",
                process.env.MONGODB_URI ? new URL(process.env.MONGODB_URI).origin : '',
            ].filter(Boolean), // Remove empty strings
            fontSrc: ["'self'", "https:", "data:"],
            objectSrc: ["'none'"],
            mediaSrc: ["'self'"],
            frameSrc: ["'none'"],
        },
    },
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
}));

// 2. Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply rate limiting to all API routes
app.use('/api/', limiter);

// 3. CORS configuration
const allowedOrigins = [
    "http://localhost:3000",
    "https://clink.netlify.app",
    "https://clinkapp.xyz",
    "https://www.clinkapp.xyz"
];

app.use(cors({
    origin: function(origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: ['GET', 'POST'],
    credentials: true,
    maxAge: 86400 // CORS preflight cache for 24 hours
}));

// 4. MongoDB sanitization
app.use(mongoSanitize({
    replaceWith: '_',
    onSanitize: ({ req, key }) => {
        console.warn(`This request[${key}] is sanitized`, req);
    }
}));

// Regular middleware
app.use(express.json({ limit: '10kb' })); // Limit body size
app.use(express.static(path.join(__dirname, '../build')));

// MongoDB connection with updated TLS configuration
let db;
const connectDB = async () => {
    try {
        // Parse the connection string to ensure it has the correct parameters
        let connectionString = process.env.MONGODB_URI;
        if (!connectionString.includes('retryWrites=true')) {
            connectionString += (connectionString.includes('?') ? '&' : '?') + 'retryWrites=true';
        }
        if (!connectionString.includes('w=majority')) {
            connectionString += '&w=majority';
        }

        const client = await MongoClient.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            maxPoolSize: 50,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            family: 4,
            tls: true,
            tlsCAFile: undefined, // Let MongoDB driver handle CA certificates
            serverApi: {
                version: '1',
                strict: true,
                deprecationErrors: true
            }
        });
        
        db = client.db('clinkWaitlistDB');
        console.log('Connected to MongoDB');
        
        // Set up indexes if they don't exist
        await db.collection('waitlist').createIndex({ email: 1 }, { unique: true });
        await db.collection('waitlist').createIndex({ timestamp: 1 });
        
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error; // Let the retry mechanism handle the error
    }
};

// Enhanced error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

// API Routes with improved error handling and validation
app.post('/api/waitlist', async (req, res) => {
    try {
        const { name, email } = req.body;

        // Input validation
        if (!name || typeof name !== 'string' || name.length > 100) {
            return res.status(400).json({ error: 'Invalid name format or length' });
        }

        if (!email || typeof email !== 'string' || email.length > 100) {
            return res.status(400).json({ error: 'Invalid email format or length' });
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        // Check for existing user
        const existingUser = await db.collection('waitlist').findOne({ email: email.toLowerCase() });

        if (existingUser) {
            // Return status 200 with the message instead of 400
            return res.status(200).json({ 
                message: `You are already on the waitlist at spot #${existingUser.position}` 
            });
        }

        // Calculate position and add to the waitlist
        const position = await db.collection('waitlist').countDocuments() + 1;
        await db.collection('waitlist').insertOne({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            timestamp: new Date(),
            position,
            ipAddress: req.ip
        });

        res.status(200).json({ 
            message: `You have been added to the waitlist at spot #${position}` 
        });

    } catch (error) {
        console.error('Waitlist Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.post('/api/contact', async (req, res) => {
    try {
        const { email, message } = req.body;

        // Enhanced input validation
        if (!email || typeof email !== 'string' || email.length > 100) {
            return res.status(400).json({ 
                error: 'Invalid email format or length'
            });
        }

        if (!message || typeof message !== 'string' || message.length > 1000) {
            return res.status(400).json({ 
                error: 'Invalid message format or length'
            });
        }

        // Email format validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                error: 'Invalid email format'
            });
        }

        // Store contact message with sanitized data
        await db.collection('contact_messages').insertOne({
            email: email.toLowerCase().trim(),
            message: message.trim(),
            timestamp: new Date(),
            ipAddress: req.ip
        });

        res.status(200).json({ 
            message: 'Message sent successfully'
        });

    } catch (error) {
        console.error('Contact Error:', error);
        res.status(500).json({ 
            error: 'Internal server error'
        });
    }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Updated retry mechanism with exponential backoff
const startServer = async () => {
    let retries = 5;
    let backoffMs = 1000; // Start with 1 second

    while (retries > 0) {
        try {
            await connectDB();
            app.listen(port, () => {
                console.log(`Server running on port ${port}`);
            });
            break;
        } catch (error) {
            console.error(`Failed to connect, retrying in ${backoffMs/1000} seconds... (${retries} attempts left)`);
            console.error('Error details:', error.message);
            
            retries--;
            if (retries === 0) {
                console.error('Failed to connect to MongoDB after multiple attempts');
                process.exit(1);
            }
            
            // Wait with exponential backoff
            await new Promise(resolve => setTimeout(resolve, backoffMs));
            backoffMs *= 2; // Double the backoff time for next attempt
        }
    }
};

// Graceful shutdown handling
process.on('SIGINT', async () => {
    try {
        if (db) {
            await db.client.close();
            console.log('MongoDB connection closed.');
        }
        process.exit(0);
    } catch (err) {
        console.error('Error during shutdown:', err);
        process.exit(1);
    }
});

startServer().catch(error => {
    console.error('Server startup error:', error);
    process.exit(1);
});