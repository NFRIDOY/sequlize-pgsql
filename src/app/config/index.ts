import { Sequelize } from 'sequelize';
import { envConfig } from './env.config';

const databaseUrl = envConfig.DATABASE_URL || '';
const sequelize = new Sequelize(databaseUrl, {
    dialect: 'postgres',
    logging: false,
    port: 5432,
});

export { sequelize };
