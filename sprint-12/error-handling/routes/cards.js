import express from "express";
import { createCard, getCards } from "../controllers/cards.js";

const cardsRouter = express.Router();

// GET /cards – Get all cards
cardsRouter.get("/", getCards);
cardsRouter.post("/", createCard);

// POST /cards – Create a card
// DELETE /cards/:cardId – Delete a card
// PUT /cards/:cardId/likes – Like a card
// DELETE /cards/:cardId/likes – Dislike a card

export default cardsRouter;
