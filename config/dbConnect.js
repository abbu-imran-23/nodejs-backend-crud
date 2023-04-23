const mongoose = require('mongoose');

// Get Database URL 
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;

const dbConnect = () => {
    mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4
    })
    .then(() => console.log("Database connection successfull"))
    .catch((error) => {
        console.log("Issue in database connection");
        console.log(error);
    })
}

module.exports = dbConnect;