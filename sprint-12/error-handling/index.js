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

// Error middleware - after all routes and middleware
app.use((err, req, res, next) => {
  // console.log("Error happen in ", req.originalUrl);
  console.error(err); // LOGS!!! -> this is for developers
  res
    .status(500)
    .send({ message: "Unexpected error! Please try again in a few minutes!" });
  // DO NOT DO THAT
  // HACKERS!!
  //.send({ error: err.message });
});

app.listen(PORT, () => {
  console.log("API working in the port:", PORT);
  connectToDatabase();
});
