import dbConnectPromise from "../lib/mongodb";

export async function connectToDb(){
    const client=await dbConnectPromise;
    const db=client.db('NextTodo');
    return {db,client};
}