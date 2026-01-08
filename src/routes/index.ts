import { Router } from 'express';
import { router as userRouter } from '../modules/user/user.routes';

const routes = Router();

routes.use('/user', userRouter);

export { routes };
