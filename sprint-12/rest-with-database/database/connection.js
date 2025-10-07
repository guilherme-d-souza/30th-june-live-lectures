import mongoose from "mongoose";

function connectToDatabase() {
  // URI -> mongodb://localhost/DB_PROJECT
  mongoose
    .connect("mongodb://localhost/spots")
    .then(() => console.log("Connected to the database!"))
    .catch(() => console.error("Not connected with the database!"));
}

export default connectToDatabase;
