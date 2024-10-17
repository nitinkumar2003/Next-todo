import { TodoSchema } from "../schemas/todoSchema";
import { getAllTodos, createTodo, deleteTodoById } from "../models/Todo";


export default async function handler(req, res) {
    if (req.method === 'GET') {
        const todos = await getAllTodos();
        res.status(200).json(todos);
    }
    if (req.method == 'POST') {
        try {
            const todoData = TodoSchema.parse(req.body);
            const newTodo = await createTodo(todoData);
            res.status(201).json(newTodo);
        } catch (err) {
            res.status(400).json({ error: err.errors })
        }
    }

    if (req.method === 'DELETE') {
        const { id } = req.query;
        await deleteTodoById(id);
        res.status(204).end();
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }

}