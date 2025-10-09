import { Schema } from "mongoose";

const cardsSchema = new Schema({
  name: {
    type: String,
    minLength: 3,
  },
  isLiked: {
    type: Boolean,
    default: false,
  },
  link: String,
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default cardsSchema;
