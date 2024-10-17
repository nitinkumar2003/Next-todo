import {z} from 'zod';

export const TodoSchema=z.object({
    title:z.string().min(1,'Title is required').max(100,'Title is too long'),
    completed:z.boolean(),
})