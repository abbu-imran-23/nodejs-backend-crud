const express = require('express');
const router = express.Router();

const { createProduct, getAllProducts, getSingleProduct,
        updateProduct, deleteProduct } = require("../controllers/AllControllers");

// Mapping createProduct route for createProduct controller
router.post('/createProduct', createProduct);

// Mapping getProducts route for getAllProducts controller
router.get('/getProducts', getAllProducts);

// Mapping getProduct/:id route for getSingleProduct controller
router.get('/getProduct/:id', getSingleProduct);

// Mapping updateProduct/:id route for updateProduct controller
router.put('/updateProduct/:id', updateProduct);

// Mapping deleteProduct/:id route for deleteProduct controller
router.delete('/deleteProduct/:id', deleteProduct);

module.exports = router;