import { Router } from 'express';
import { router as userRouter } from '../modules/user/user.routes';
import { router as blogRouter } from '../modules/blog/blog.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/blog', blogRouter);

export { routes };
