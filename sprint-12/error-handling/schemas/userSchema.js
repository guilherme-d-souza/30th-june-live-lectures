import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  about: String,
  avatar: String,
  // cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }]
});

export default userSchema;
