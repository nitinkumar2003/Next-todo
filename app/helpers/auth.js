import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function hashPassword(password) {
    return await bcrypt.hash(password,10);
}

export async function verifyPassword(password,hashedPassword){
    return await bcrypt.compare(password,hashedPassword)
}

export function generateToken(email){
    return jwt.sign({email},process.env.JWT_SECRET,{expiresIn:'1h'})
}

export function verifyToken(token){
    return jwt.verify(token, process.env.JWT_SECRET);
}