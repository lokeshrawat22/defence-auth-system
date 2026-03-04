const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const connectNavyDB = require("./config/mongo.navy");

const app = express();

// Middleware
app.use(cookieParser());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://localhost:4200",
    "http://localhost:8000"
  ],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/auth", require("./routes/auth.routes.js"));

// Start Server After DB Connection
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectNavyDB();
    console.log("Database Connected ✅");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🚀`);
    });

  } catch (error) {
    console.error("Failed to start server ❌", error);
    process.exit(1);
  }
};

startServer();