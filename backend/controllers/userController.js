import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

// Route for user login
const loginUser = async (req, res) => {

};

// Route for user registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password, } = req.body;

        // Check if user exists
        const exists = await User.findOne({ where: { email } });
        if (exists) {
            return res.json({ success: false, message: 'User already exists' });
        }

        // Validate email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Please enter a valid email' });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: 'Please enter a strong password'} );
        }

        // Hash user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        const token = createToken(user.id);

        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
};

// Route for admin login
const adminLogin = async (req, res) => {

};

export { loginUser, registerUser, adminLogin };
