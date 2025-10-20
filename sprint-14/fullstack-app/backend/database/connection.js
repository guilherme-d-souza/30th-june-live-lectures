import mongoose from "mongoose";
import CONFIG from "../utils/config.js";

function connectToDatabase() {
  // URI -> mongodb://localhost:port/DB_PROJECT
  mongoose
    .connect(CONFIG.MONGO_URI)
    .then(() => console.log("Connected to the database!"))
    .catch(() => console.error("Not connected with the database!"));
}

export default connectToDatabase;
