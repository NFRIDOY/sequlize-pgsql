import type { Request, Response } from 'express';
import { Blog } from './blog.model';

export const getBlogs = async (req: Request, res: Response) => {
    try {
        const blogs = await Blog.findAll();
        res.json(blogs);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createBlog = async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        const blog = await Blog.create({ name, email });
        res.status(201).json(blog);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
