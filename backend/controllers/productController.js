import { v2 as cloudinary } from 'cloudinary';
import Product from '../models/productModel.js';

// Functionality to add product
const addProduct = async (req, res) => {
    try {
        console.log("Files uploaded:", req.files);
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        // Extract file paths from multer's req.files
        const image1 = req.files?.image1?.[0]?.path || null;
        const image2 = req.files?.image2?.[0]?.path || null;
        const image3 = req.files?.image3?.[0]?.path || null;

        // Filter null/undefined paths
        const images = [image1, image2, image3].filter((item) => item !== null && item !== undefined);

        // Upload images to Cloudinary
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item, { resource_type: 'image' });
                return result.secure_url;
            })
        )
        console.log(imagesUrl);

        // Create the product in the database
        const timestampInSeconds = Math.floor(Date.now() / 1000);

        const product = await Product.create({
            name,
            description,
            price: Number(price),
            image: imagesUrl,
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === 'true' ? true : false,
            date: timestampInSeconds,
        });

        res.json({ success: true, message: 'Product added' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Functionality to remove a product
const removeProduct = async (req, res) => {
    try {
        const result = await Product.destroy({
            where: { id: req.body.id }
        });

        if (result) {
            res.json({ success: true, message: 'Product removed' });
        } else {
            res.json({ success: false, message: 'Product not found' });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Functionality to list products
const listProducts = async (req, res) => {
    try {
        const products = await Product.findAll({});
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Functionality to get a single product
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await Product.findOne({ where: { id: productId } });
        if (product) {
            res.json({ success: true, product });
        } else {
            res.json({ success: false, message: 'Product not found' });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addProduct, removeProduct, listProducts, singleProduct };