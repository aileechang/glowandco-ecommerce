import express from 'express';
import {
    placeOrderPayPal,
    verifyPayPal,
    placeOrderStripe,
    verifyStripe,
    allOrders,
    userOrders,
    updateStatus
} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

// Payment
orderRouter.post('/paypal', authUser, placeOrderPayPal);
orderRouter.post('/stripe', authUser, placeOrderStripe);

// User
orderRouter.post('/userorders', authUser, userOrders);

// Verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe);
orderRouter.post('/verifyPayPal', authUser, verifyPayPal);

export default orderRouter;