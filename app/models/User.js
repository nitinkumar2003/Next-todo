import dbConnectPromise from "../lib/mongodb";

export async function findUserByEmail(email) {
    const client = await dbConnectPromise;
    const db = client.db('todolist');
    return await db.collection('users').findOne({ email });
}

export async function createUser(email, hashedPassword) {
    const client = await dbConnectPromise;
    const db = client.db('todolist');
    return await db.collection('users').insertOne({ email, password: hashedPassword });
}
