import 'dotenv/config';
import { Sequelize } from 'sequelize';

// Create new Sequelize instance
const sequelize = new Sequelize(process.env.SUPABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
    }
});

// Connect to database
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to Supabase PostgreSQL');

        // Sync models with database
        await sequelize.sync({ alter: true });
        console.log('Database synced successfully');
    } catch (error) {
        console.log('Error connecting to Supabase PostgreSQL:', error);
        process.exit(1);
    }
};

export { connectDB, sequelize };