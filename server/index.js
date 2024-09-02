import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import postsRouter from "./routes/posts.js";

dotenv.config();

const app = express();

// Middleware setup
app.use(bodyParser.json({ limit: "30mb" })); // Limiting request size to mitigate DoS attacks
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); // Use 'qs' library for parsing objects/arrays
app.use(cors());

app.use("/posts", postsRouter);

// Example of connecting to MongoDB (make sure to replace 'MONGO_URL' with your actual variable name)
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_URL}@cluster0.shn3qtn.mongodb.net/MemoGram?retryWrites=true&w=majority`
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// mongoose.set("useFindAndModify", false); // so that find record and update operation is disabled

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
