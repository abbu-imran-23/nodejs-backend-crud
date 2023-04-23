// Import createProduct Controller
const createProduct = require('../controllers/createProduct');

// Import getAllProducts Controller
const getAllProducts = require('../controllers/getAllProducts');

// Import getSingleProduct Controller
const getSingleProduct = require('../controllers/getSingleProduct');

// Import updateProduct Controller
const updateProduct = require('../controllers/updateProduct');

// Import deleteProduct Controller
const deleteProduct = require('../controllers/deleteProduct');


module.exports = { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct };