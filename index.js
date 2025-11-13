const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Middleware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// ✅ Database connection
const connectDB = require("./config/db");
connectDB(); // ✅ Call the function to connect to MongoDB

// ✅ Routes
app.get("/", (req, res) => {
  res.send("Hello, this is backend!");
});

const portfolioRoutes = require("./routes/portfolioRoutes");
app.use("/api/portfolio", portfolioRoutes);

// ✅ Server setup
const HOST = "127.0.0.1";
const PORT = process.env.PORT || 5000;

app.listen(PORT, HOST, () => {
  console.log(`🚀 Server is running on http://${HOST}:${PORT}`);
});
