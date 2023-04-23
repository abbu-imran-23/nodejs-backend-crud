const productSchema = require('../models/productSchema');

const getAllProducts = async(req,res) => {
    try {
        // fetch all products from database
        const response = await productSchema.find({});
        // Handle if there are no products in database
        if(response.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No products to fetch"
            })
        }
        // send success flag
        res.status(200).json({
            success: true,
            data: response,
            message: "fetched all products from database"
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

module.exports = getAllProducts;