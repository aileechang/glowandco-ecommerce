import 'dotenv/config';
import { Sequelize } from 'sequelize';

// Create new Sequelize instance
const sequelize = new Sequelize(process.env.POSTGRES_URI, {
    dialect: 'postgres',
});

// Connect to database
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to PostgreSQL');
    } catch (err) {
        console.log('Error connecting to PostgreSQL:', err.message);
        process.exit(1);
    }
};

export { sequelize, connectDB };