import mongoose from "mongoose";
import cardsSchema from "../schemas/cardsSchema.js";

const CardModel = mongoose.model("Card", cardsSchema);

export default CardModel;
