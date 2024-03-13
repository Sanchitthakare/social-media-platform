// server.ts

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes";
import ProfileRoutes from "./routes/ProfileRoutes";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api", ProfileRoutes);
app.use("/api", userRoutes);

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
