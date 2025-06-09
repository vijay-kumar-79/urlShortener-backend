const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  const Mongo_Url = process.env.MONGO_URI || "mongodb://localhost:27017/short-url";
  mongoose
    .connect(Mongo_Url)
    .then(console.log("MongoDB Connected.."))
    .catch((err) => console.log("Error connecting DB ", err));
};

module.exports = connectDB;