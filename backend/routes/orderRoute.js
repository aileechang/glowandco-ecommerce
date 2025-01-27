import express from 'express';
import {
    createOrderStripe,
    verifyStripe,
    allOrders,
    userOrders,
    //getDetails,
    updateStatus
} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

// Payment
orderRouter.post('/stripe', authUser, createOrderStripe);

// User
orderRouter.post('/userorders', authUser, userOrders);
//orderRouter.post('/orderdetails', authUser, getDetails);

// Verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe);

export default orderRouter;