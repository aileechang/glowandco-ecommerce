import { where } from "sequelize";
import Order from "../models/orderModel.js";
import User from "../models/userModel.js";
import Stripe from "stripe";
import paypal from "@paypal/checkout-server-sdk";
import paypalClient from "../config/paypal.js";
import generateConfirmationCode from "../utils/generateConfirmationCode.js";

// Global variables
const currency = "usd";
const shippingFee = 10;

// Initialize gateway
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Place orders using paypal
const placeOrderPayPal = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const { origin } = req.headers;

    const confirmationCode = generateConfirmationCode();

    const order = await Order.create({
      userId,
      items,
      amount,
      address,
      paymentMethod: "PayPal",
      payment: false,
      confirmationCode,
    });

    const purchase_units = [
      {
        amount: {
          currency_code: "USD",
          value: amount.toFixed(2),
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: items
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2),
            },
            shipping: {
              currency_code: "USD",
              value: shippingFee.toFixed(2),
            },
          },
        },
        shipping: {
          address: {
            address_line_1: address.street,
            address_line_2: address.line2 || "",
            admin_area_2: address.city,
            admin_area_1: address.state,
            postal_code: address.zipcode,
            country_code: address.country,
          },
        },
        items: items.map((item) => ({
          name: item.name,
          unit_amount: {
            currency_code: "USD",
            value: item.price.toFixed(2),
          },
          quantity: item.quantity,
        })),
      },
    ];

    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
      intent: "CAPTURE",
      purchase_units,
      application_context: {
        return_url: `${origin}/verify?success=true&orderId=${order.id}&paymentMethod=${order.paymentMethod}`,
        cancel_url: `${origin}/verify?success=false&orderId=${order.id}&paymentMethod=${order.paymentMethod}`,
      },
    });

    const response = await paypalClient.execute(request);

    const approvalUrl = response.result.links.find(
      (link) => link.rel === "approve"
    )?.href;

    if (!approvalUrl) {
      throw new Error("Approval URL not found in PayPal response.");
    }

    res.json({ success: true, session_url: approvalUrl });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

const verifyPayPal = async (req, res) => {
  const { orderId, success, userId } = req.body;

  try {
    if (!orderId || !userId || success === undefined) {
      return res.json({ success: false, message: "Invalid request data" });
    }
    if (success === "true") {
      // Update order to mark payment as completed
      await Order.update({ payment: true }, { where: { id: orderId } });

      // Clear user's cart
      await User.update({ cartData: {} }, { where: { id: userId } });

      return res.json({
        success: true,
        message: "Payment verified and cart cleared",
      });
    } else {
      await Order.destroy({
        where: { id: orderId },
      });

      return res.json({
        success: false,
        message: "Payment failed. Order removed",
      });
    }
  } catch (error) {
    console.error("Error in verifyPayPal:", error);
    return res.json({ success: false, message: error.message });
  }
};

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
      paymentMethod: "Stripe",
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
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency,
        product_data: {
          name: "Shipping fee",
        },
        unit_amount: Math.round(shippingFee * 100),
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      success_url: `${origin}/verify?success=true&orderId=${order.id}&paymentMethod=${order.paymentMethod}`,
      cancel_url: `${origin}/verify?success=false&orderId=${order.id}&paymentMethod=${order.paymentMethod}`,
      line_items,
      mode: "payment",
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const verifyStripe = async (req, res) => {
  const { orderId, success, userId } = req.body;

  try {
    if (!orderId || !userId || success === undefined) {
      return res.json({ success: false, message: "Invalid request data" });
    }

    if (success === "true") {
      // Update order to mark payment as completed
      await Order.update({ payment: true }, { where: { id: orderId } });

      // Clear user's cart
      await User.update({ cartData: {} }, { where: { id: userId } });

      return res.json({
        success: true,
        message: "Payment verified and cart cleared",
      });
    } else {
      await Order.destroy({
        where: { id: orderId },
      });

      return res.json({
        success: false,
        message: "Payment failed. Order removed",
      });
    }
  } catch (error) {
    console.error("Error in verifyStripe:", error);
    return res.json({ success: false, message: error.message });
  }
};

// All orders for admin
const allOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

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

    await Order.update({ status }, { where: { id: orderId } });

    res.json({ success: true, message: "Status updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrderPayPal,
  verifyPayPal,
  placeOrderStripe,
  verifyStripe,
  allOrders,
  userOrders,
  updateStatus,
};
