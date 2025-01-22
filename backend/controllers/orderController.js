import { where } from 'sequelize';
import Order from '../models/orderModel.js';
import User from '../models/userModel.js';

// Place orders using credit/debit
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        if (!userId || !items || !amount || !address) {
            return res.json({
                success: false,
                message: 'Missing required field',
            });
        }

        const order = await Order.create({
            userId,
            items,
            amount,
            address,
            paymentMethod: 'debit/credit',
            payment: false,
        });

        await User.update(
            { cartData: {} },
            { where: { id: userId } }
        );

        res.json({ success: true, message: 'Order Placed'})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    } 
}
/*
// Place orders using stripe
const placeOrderStripe = async (req, res) => {

}

// Place orders using razorpay
const placeOrderRazorpay = async (req, res) => {

}
*/
// All orders for admin
const allOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({});
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// All orders for user
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;

        const orders = await Order.findAll({ where: { userId: String(userId) } });

        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Update order status for admin
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;

        await Order.update(
            { status },
            { where: { id: orderId } }
        );

        res.json({ success: true, message: 'Status updated' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}


export {
    placeOrder,
    /*
    placeOrderStripe,
    placeOrderRazorpay,*/
    allOrders,
    userOrders,
    updateStatus
}