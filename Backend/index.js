import express from "express";
// import dotenv from "dotenv";
import forgotPasswordRoute from "./route/forgotPassword.route.js";
import mongoose from "mongoose";
import bookRouter from "./route/book.route.js";
import userRouter from "./route/user.route.js";
// import loginRouter from "./route/user.route.js";
import cors from "cors";
import "dotenv/config";
// dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;

const URI = process.env.MongoDBURI;

//Connect to MongoDB
try {
  await mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

//define routes
app.use("/book", bookRouter);

app.use("/user", userRouter);
app.use("/user", forgotPasswordRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
