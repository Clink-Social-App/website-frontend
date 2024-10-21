import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://clinkllcnyc:pqUvQAzLhPDjFOsG@cluster0.mmsjj.mongodb.net/clinkWaitlistDB?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

export async function connectToMongo() {
    if (!client.connect) {
        await client.connect();
    }
    return client.db('clinkWaitlistDB');
}
