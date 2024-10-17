import { LoginSchema } from "@/app/schemas/authSchema";
import { findUserByEmail } from "@/app/models/User";
import { verifyPassword, generateToken } from "@/app/helpers/auth";


export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { email, password } = LoginSchema.parse(req.body);
            const user = await findUserByEmail(email);
            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }
            const isPasswordValid = await verifyPassword(password, user.password);
            if (!isPasswordValid) {
                return res.status(400).json({ message: 'Invalid credentials' });
            } const token = generateToken(user.email);
            res.status(200).json({ token });
        } catch (error) {
            res.status(400).json({ error: error.errors });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}