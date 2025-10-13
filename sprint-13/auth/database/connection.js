import mongoose from "mongoose";

function connectToDatabase() {
  // URI -> mongodb://localhost:port/DB_PROJECT
  mongoose
    .connect("mongodb://localhost/auth_example")
    .then(() => console.log("Connected to the database!"))
    .catch(() => console.error("Not connected with the database!"));
}

export default connectToDatabase;
