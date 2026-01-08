import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './app/config/index';
import { routes } from './routes';
import { errorHandler } from './app/middleware/errorHandler';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import { requestLogger } from './app/middleware/requestLogger';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(requestLogger);

// Body parsing middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Error handling middleware
app.use(globalErrorHandler);

// Start server
app.listen(port, async () => {
    console.log(`Server running on port ${port}`);

    // Connect to DB
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
