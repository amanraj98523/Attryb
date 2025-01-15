// import mongoose from "mongoose";
// // import { Connection } from "./config/db.config.js";
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// // import { Connection } from "./config/db.config.js";
// import { usersRouter } from "./routes/user.routes.js";
// import { oemSpecsRouter } from "./routes/oemSpecs.routes.js";
// import { marketplaceInventorRouter } from "./routes/marketplaceInventor.routes.js";

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Base route
// app.get("/", (req, res) => {
//   res.send("Welcome To Buy-Cars-Assignment Backend");
// });

// // API routes
// app.use("/user", usersRouter);
// app.use("/marketplaceinventory", marketplaceInventorRouter);
// app.use("/oemspecs", oemSpecsRouter);

// // Start the server
// app.listen(process.env.port, async () => {
//   try {
//     await Connection;
//     console.log(`Connected to the database`);
//   } catch (err) {
//     console.log(`Database connection error:`, err.message);
//   }
//   console.log(`Server running at port ${process.env.port}`);
// });


import express from "express";
import {
  get_marketplaceInventor,
  add_marketplaceInventor,
  delete_marketplaceInventor,
  getSingle_marketplaceInventor,
  update_marketplaceInventor,
} from "../controller/marketplaceInventor.controller.js";

const marketplaceInventorRouter = express.Router();

marketplaceInventorRouter.get("/", get_marketplaceInventor);
marketplaceInventorRouter.post("/", add_marketplaceInventor);
marketplaceInventorRouter.delete("/:id", delete_marketplaceInventor);
marketplaceInventorRouter.patch("/:id", update_marketplaceInventor);
marketplaceInventorRouter.get("/:id", getSingle_marketplaceInventor);

export { marketplaceInventorRouter }; // Ensure it's a named export
