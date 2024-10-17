import {z} from 'zod';

export const SignupSchema=z.object({
    email:z.string().email('Invalid email format'),
    password:z.string(6,'Password must be at least 6 charactors'),
});

export const LoginSchema=z.object({
    email:z.string().email('Invalid email format'),
    password:z.string(6,'Password must be at least 6 charactors'),
});