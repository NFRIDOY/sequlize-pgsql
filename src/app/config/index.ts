import { Sequelize } from 'sequelize';

// Database setup from .env
const databaseUrl = process.env.DATABASE_URL || '';
const sequelize = new Sequelize(databaseUrl);

export { sequelize };
