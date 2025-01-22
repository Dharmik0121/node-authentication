const mongoose = require("mongoose");
require("dotenv").config();

//mongoDb Connection
const connectMongoDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { connectMongoDB };
