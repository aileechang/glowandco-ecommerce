import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB, sequelize } from './config/postgres.js';
import connectCloudinary from './config/cloudinary.js';

// App config
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Sync models
sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch(err => console.log('Error syncing database:', err));

// Middlewares
app.use(express.json());
app.use(cors());

// Api endpoints

app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});