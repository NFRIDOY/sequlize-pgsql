import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes';
// import { errorHandler } from './app/middleware/errorHandler';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import { requestLogger } from './app/middleware/requestLogger';

dotenv.config();

export const app = express();
export const port = process.env.PORT || 8000;

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    throw new Error("❌ DATABASE_URL is not defined");
}


// Middleware
app.use(requestLogger);

// Body parsing middleware
app.use(express.json());

// Routes
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// health
app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});

// Error handling middleware
app.use(globalErrorHandler);
