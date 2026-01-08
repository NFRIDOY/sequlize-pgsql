import type { Request, Response } from 'express';
import { User } from './user.model';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        const user = await User.create({ name, email });
        res.status(201).json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
