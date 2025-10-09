import express from "express";
import cors from "cors";
import connectToDatabase from "./database/connection.js";
import usersRouter from "./routes/users.js";
import cardsRouter from "./routes/cards.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundRouteHandler from "./middlewares/notFoundRouteHandler.js";

const app = express();
const PORT = 3001;

// middlewares
app.use(express.json());
app.use(cors());

// routes
// User routes
app.use(usersRouter);

// Card routes
app.use("/cards", cardsRouter);

// 404 handler - after all routes and middleware (only before the error handler)
app.use(notFoundRouteHandler);
// Error middleware - after all routes and middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("API working in the port:", PORT);
  connectToDatabase();
});
