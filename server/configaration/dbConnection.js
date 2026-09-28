const mongoose = require("mongoose");
const dbUrl = process.env.MONGODB_URL;

const dbConnection = async () => {
    try {
        mongoose.connect(dbUrl)
        console.log("Database is connected");
    } catch (error) {
        console.error("Database connected is failed:" , error.message);
    }
}

module.exports = dbConnection;