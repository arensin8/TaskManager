const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const reportRoutes = require('./routes/reportRoutes')
const PORT = process.env.PORT || 4000;

dotenv.config();

const app = express();
app.use(express.json()); // For parsing JSON request bodies

// Connect to the database
connectDB();

// Routes
app.use("/api/tasks", taskRoutes);
app.use("/api/reports", reportRoutes);



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
});
