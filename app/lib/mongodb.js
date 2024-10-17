import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const dbConnectPromise = client.connect();

export default dbConnectPromise;