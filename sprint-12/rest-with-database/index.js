import express from "express";
import cors from "cors";
import connectToDatabase from "./database/connection.js";
import usersRouter from "./routes/users.js";

const app = express();
const PORT = 3001;

// middlewares
app.use(express.json());
app.use(cors());

// routes
// User routes
app.use(usersRouter);

// Card routes

// GET /cards – Get all cards
// POST /cards – Create a card
// DELETE /cards/:cardId – Delete a card
// PUT /cards/:cardId/likes – Like a card
// DELETE /cards/:cardId/likes – Dislike a card

app.listen(PORT, () => {
  console.log("API working in the port:", PORT);
  connectToDatabase();
});
