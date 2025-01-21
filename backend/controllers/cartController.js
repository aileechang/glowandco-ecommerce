import userModel from '../models/userModel.js';

// Add product to user cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;

        const userData = await userModel.findOne({
            where: { id: userId },
            attributes: ['id', 'cartData'],
        });

        if (!userData) {
            return res.json({ success: false, message: 'User not found' });
        }

        let cartData = userData.cartData || {};

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        // Update cartData in the user record
        await userModel.update(
            { cartData },
            { where: { id: userId } }
        );

        res.json({ success: true, message: 'Added to cart' });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Update user cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;

        const userData = await userModel.findOne({
            where: { id: userId },
            attributes: ['id', 'cartData'],
        });

        if (!userData) {
            return res.json({ success: false, message: 'User not found' });
        }

        let cartData = userData.cartData || {};

        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        cartData[itemId][size] = quantity;

        await userModel.update(
            { cartData },
            { where: { id: userId } }
        );

        res.json({ success: true, message: 'Cart updated' });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Get user cart data
const getUserCart = async (req, res) => {
 try {
    const { userId } = req.body;

    const userData = await userModel.findOne({
        where: { id: userId },
        attributes: ['id', 'cartData'],
    });

    if (!userData) {
        return res.json({ success: false, message: 'User not found' });
    }

    let cartData = userData.cartData || {};

    res.json({ success: true, cartData })

 } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
 }
}

export { addToCart, updateCart, getUserCart }