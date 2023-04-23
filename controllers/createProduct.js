// Get Schema of Product
const productSchema = require('../models/productSchema');

const createProduct = async(req,res) => {
    try {
        // Parse product details from request body
        const { title, description, price, quantity } = req.body;
        // Create product entry in database
        const response = await productSchema.create({ title, description, price, quantity });
        // Send success flag
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry created in database"
        })
    } catch (error) {
        console.log(error);
        // send failure flag
        res.status(500).json({
            success: false,
            error: error,
            message: "Internal server error"
        })
    }
}

module.exports = createProduct;