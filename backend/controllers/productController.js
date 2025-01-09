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
        const image4 = req.files?.image4?.[0]?.path || null;

        // Filter null/undefined paths
        const images = [image1, image2, image3, image4].filter((item) => item !== null && item !== undefined);

        // Upload images to Cloudinary
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item, { resource_type: 'image' });
                return result.secure_url;
            })
        )

        // Create the product in the database
        const product = await Product.create({
            name,
            description,
            price: Number(price),
            image: imagesUrl,
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === 'true' ? true : false,
            date: Date.now(),
        });

        res.json({ success: true, message: 'Product added' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Functionality to remove a product
const removeProduct = async (req, res) => {

}

// Functionality to list products
const listProducts = async (req, res) => {

}

// Functionality to get a single product
const singleProduct = async (req, res) => {

}

export { addProduct, removeProduct, listProducts, singleProduct };