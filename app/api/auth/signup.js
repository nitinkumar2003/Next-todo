import { SignupSchema } from "@/app/schemas/authSchema";
import { hashPassword } from "@/app/helpers/auth";
import { createUser } from "@/app/models/User";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { email, password } = SignupSchema.parse(req.body);
            const hashedPassword = await hashPassword(password);
            const result = await createUser(email, hashedPassword);
            res.status(201).json({ message: 'User created successfully', userId: result.insertedId });

        } catch (error) {
            res.status(400).json({ error: error.errors });
        }
    }else {
        res.status(405).json({ message: 'Method not allowed' });
      }
}