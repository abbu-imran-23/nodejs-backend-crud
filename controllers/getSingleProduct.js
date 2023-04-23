const productSchema = require('../models/productSchema');

const getSingleProducts = async(req,res) => {
    try {
        // Parse product id from request params
        const { id } = req.params;
        // fetch product of given id from database
        const response = await productSchema.findById({_id: id});
        // Handle if there is no product in database
        if(!response) {
            return res.status(404).json({
                success: false,
                message: `No product found with the given id - ${id}`
            })
        }
        // send success flag
        res.status(200).json({
            success: true,
            data: response,
            message: "fetched product from database"
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

module.exports = getSingleProducts;