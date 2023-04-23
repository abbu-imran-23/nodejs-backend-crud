const productSchema = require('../models/productSchema');

const deleteProduct = async(req,res) => {
    try {
        // Parse product id from request params
        const { id } = req.params;
        // delete product with given id from database
        const response = await productSchema.findByIdAndDelete({_id:id});
        // Handle if there is no product in database
        if(!response) {
            return res.status(404).json({
                success: false,
                message: `No product found with the given id - ${id} to delete`
            })
        }
        // send success flag
        res.status(200).json({
            success: true,
            data: response,
            message: "deleted product details from database"
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

module.exports = deleteProduct;