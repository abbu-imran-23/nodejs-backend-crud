const productSchema = require('../models/productSchema');

const updateProduct = async(req,res) => {
    try {
        // Parse product id from request params
        const { id } = req.params;
        // Parse product details from request body
        const { title, description, price, quantity } = req.body;
        // update product details for the given id
        const response = await productSchema.findByIdAndUpdate(id, { title, description, price, quantity });
        // find updated product details
        const updatedProduct = await productSchema.findById({_id: id});
        // Handle if there is no product in database
        if(!response) {
            return res.status(404).json({
                success: false,
                message: `No product found with the given id - ${id} to update`
            })
        }
        // send success flag
        res.status(200).json({
            success: true,
            data: updatedProduct,
            message: "updated product details"
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

module.exports = updateProduct;