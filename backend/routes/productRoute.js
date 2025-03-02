import express from 'express';
import { addProduct, removeProduct, listProducts, singleProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

// Route to add a product
productRouter.post('/add', adminAuth, upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
]), addProduct);
// Route to remove a product
productRouter.post('/remove', adminAuth, removeProduct);
// Route to list products
productRouter.get('/list', listProducts);
// Route to get a single product
productRouter.get('/single', singleProduct);

export default productRouter;