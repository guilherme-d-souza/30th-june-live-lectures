import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  about: String,
  avatar: String,
});

export default userSchema;
