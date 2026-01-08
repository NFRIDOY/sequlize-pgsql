import { Router } from 'express';
import { getBlogs, createBlog } from './blog.controller';

const router = Router();

router.get('/blogs', getBlogs);
router.post('/blogs', createBlog);

export { router };
