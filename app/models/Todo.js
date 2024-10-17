import clientPromise from '../lib/mongodb';

export async function getAllTodos() {
  const client = await clientPromise;
  const db = client.db('todolist');
  return await db.collection('todos').find({}).toArray();
}

export async function createTodo(todo) {
  const client = await clientPromise;
  const db = client.db('todolist');
  return await db.collection('todos').insertOne(todo);
}

export async function deleteTodoById(id) {
  const client = await clientPromise;
  const db = client.db('todolist');
  return await db.collection('todos').deleteOne({ _id: new ObjectId(id) });
}
