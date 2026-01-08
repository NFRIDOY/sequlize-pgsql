import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes';
// import { errorHandler } from './app/middleware/errorHandler';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import { requestLogger } from './app/middleware/requestLogger';

dotenv.config();

export const app = express();
export const port = process.env.PORT || 4000;

// Middleware
app.use(requestLogger);

// Body parsing middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Error handling middleware
app.use(globalErrorHandler);
