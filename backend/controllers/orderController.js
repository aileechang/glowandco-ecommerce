import { where } from 'sequelize';
import Order from '../models/orderModel.js';
import User from '../models/userModel.js';
import Stripe from 'stripe';

// Global variables
const currency = 'usd';
const shippingFee = 10;

// Initialize gateway
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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

// Place orders using stripe
const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const { origin } = req.headers;

        const order = await Order.create({
            userId,
            items,
            amount,
            address,
            paymentMethod: 'Stripe',
            payment: false,
        });

        const line_items = items.map((item) => ({
            price_data: {
                currency,
                product_data: {
                    name: item.name,
                },
                unit_amount: Math.round(item.price * 100),
            },
            quantity: item.quantity
        }));

        line_items.push({
            price_data: {
                currency,
                product_data: {
                    name: 'Shipping fee'
                },
                unit_amount: Math.round(shippingFee * 100),
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            success_url: `${origin}/verify?success=true&orderId=${order.id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${order.id}`,
            line_items,
            mode: 'payment',
        });

        res.json({ success: true, session_url: session.url })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const verifyStripe = async (req, res) => {
    const { orderId, success, userId } = req.body;

    try {
        if (!orderId || !userId || success === undefined) {
            return res.json({ success: false, message: 'Invalid request data' });
        }

        if (success === 'true') {
            // Update order to mark payment as completed
            await Order.update(
                { payment: true },
                { where: { id: orderId } }
            );

            // Clear user's cart
            await User.update(
                { cartData: {} },
                { where: { id: userId } }
            );

            return res.json({ success: true, message: 'Payment verified and cart cleared' });
        } else {
            await Order.destroy({
                where: { id: orderId },
            });

            return res.json({ success: false, message: 'Payment failed. Order removed' });
        }
    } catch (error) {
        console.error('Error in verifyStripe:', error);
        return res.json({ success: false, message: error.message });
    }
};

/*
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
    placeOrderStripe,
    verifyStripe,
    /*placeOrderRazorpay,*/
    allOrders,
    userOrders,
    updateStatus
}