import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";

dotenv.config();

const app = express();
// for parsing JSON body request
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use("/api/tasks", taskRoutes);
app.use("/api/reports", reportRoutes);

export default app;
