// const mongoose = require("mongoose");
// require("dotenv").config();

// const connectToDatabase = async () => {
//   try {
//     if (!process.env.DB_URL) {
//       throw new Error(
//         "Database connection URL (DB_URL) is missing in environment variables."
//       );
//     }

//     await mongoose.connect(process.env.DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("Successfully connected to the database");
//   } catch (error) {
//     console.error("Error connecting to the database:", error.message);
//     process.exit(1); // Exit the process if the database connection fails
//   }
// };

// module.exports = { connectToDatabase };



import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDatabase = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error(
        "Database connection URL (MONGO_URI) is missing in environment variables."
      );
    }

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Successfully connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); // Exit the process if the database connection fails
  }
};

export { connectToDatabase };
