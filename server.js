// Initiating Server
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Get PORT Number
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// Running Server
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

// Database Connection
const dbConnect = require('./config/dbConnect');
dbConnect();

// Default Route
app.get('/', (req,res) => {
    res.send("This is home page");
})

// Import router
const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);

