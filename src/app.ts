import express from "express";
import bodyParser from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";
import mountRoutes from './routes/index';

import cors from "cors";

const app = express();

// Enable CORS for all routes
// Add headers before the routes are defined
app.use(cors());

// Parse request body as JSON
app.use(bodyParser.json());

// Connect to MongoDB
let MONGODB_URI = process.env.MONGODB_URI||"";
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://nsgondal:IhaUtlltDwmcbrGD@basicpractice.v6reejg.mongodb.net/innova-test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}as ConnectOptions);
const db = mongoose.connection;
db.on("error", (error) => {
  console.error("Error occurred while connecting to MongoDB:", error);
});
db.once("open", () => {
  console.log("MongoDB connection established successfully");
});

//Mount routes

mountRoutes(app);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
