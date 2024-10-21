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

// Trust proxy - Required for Railway deployment
app.set('trust proxy', 1);

// Updated CORS configuration
const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5001",
    "https://clink.netlify.app",
    "https://clinkapp.xyz",
    "https://www.clinkapp.xyz",
    process.env.RAILWAY_STATIC_URL,
    process.env.RAILWAY_PUBLIC_DOMAIN
].filter(Boolean);

// Security Middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            connectSrc: ["'self'", ...allowedOrigins],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"],
            fontSrc: ["'self'", "https:", "data:"]
        }
    }
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false
});

app.use('/api/', limiter);

// CORS middleware
app.use(cors({
    origin: function(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error(origin));
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST'],
    maxAge: 86400
}));

// MongoDB sanitization (single instance)
app.use(mongoSanitize({
    replaceWith: '_',
    onSanitize: ({ req, key }) => {
        console.warn(`This request[${key}] is sanitized`, req);
    }
}));

app.use(express.json({ limit: '10kb' }));
app.use(express.static(path.join(__dirname, '../build')));

// MongoDB connection
const connectDB = async () => {
    try {
        const client = await MongoClient.connect(process.env.MONGODB_URI, {
            maxPoolSize: 50,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            family: 4,
            tls: true,
            serverApi: {
                version: '1',
                strict: true,
                deprecationErrors: true
            }
        });
        
        console.log('Connected to MongoDB');
        return client.db('clinkWaitlistDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
};

// Initialize routes with database connection
const initializeRoutes = (app, db) => {
    // Waitlist route
    app.post('/api/waitlist', async (req, res) => {
        try {
            const { name, email } = req.body;

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

            const existingUser = await db.collection('waitlist').findOne({ email: email.toLowerCase() });

            if (existingUser) {
                return res.status(200).json({ 
                    message: `You are already on the waitlist at spot #${existingUser.position}` 
                });
            }

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

    // Contact route
    app.post('/api/contact', async (req, res) => {
        try {
            const { email, message } = req.body;

            if (!email || typeof email !== 'string' || email.length > 100) {
                return res.status(400).json({ error: 'Invalid email format or length' });
            }

            if (!message || typeof message !== 'string' || message.length > 1000) {
                return res.status(400).json({ error: 'Invalid message format or length' });
            }

            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ error: 'Invalid email format' });
            }

            await db.collection('contact_messages').insertOne({
                email: email.toLowerCase().trim(),
                message: message.trim(),
                timestamp: new Date(),
                ipAddress: req.ip
            });

            res.status(200).json({ message: 'Message sent successfully' });

        } catch (error) {
            console.error('Contact Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    // Serve React app for all other routes
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
    });
};

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

// Start server with retry mechanism
const startServer = async () => {
    let retries = 5;
    let backoffMs = 1000;

    while (retries > 0) {
        try {
            const db = await connectDB();
            initializeRoutes(app, db);
            
            app.listen(port, () => {
                console.log(`Server running on port ${port}`);
            });
            break;
        } catch (error) {
            console.error(`Failed to connect, retrying in ${backoffMs/1000} seconds... (${retries} attempts left)`);
            retries--;
            if (retries === 0) {
                console.error('Failed to connect to MongoDB after multiple attempts');
                process.exit(1);
            }
            await new Promise(resolve => setTimeout(resolve, backoffMs));
            backoffMs *= 2;
        }
    }
};

// Graceful shutdown handling
process.on('SIGINT', async () => {
    try {
        console.log('Shutting down gracefully...');
        process.exit(0);
    } catch (err) {
        console.error('Error during shutdown:', err);
        process.exit(1);
    }
});

startServer().catch(console.error);