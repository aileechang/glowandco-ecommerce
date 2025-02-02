import express from 'express';
import compression from 'compression';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/sequelize.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App config
const app = express();
const PORT = process.env.PORT || 4001;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(compression());
app.use(cors());

// Api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});