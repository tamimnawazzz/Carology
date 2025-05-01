
import Product from '../models/Product.js';

export const addProduct = async (req, res) => {
    const { name, price, category } = req.body;
    try {
        const product = new Product({ name, price, category });
        await product.save();
        res.json({ message: 'Product added to marketplace' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding product', error: err.message });
    }
};
