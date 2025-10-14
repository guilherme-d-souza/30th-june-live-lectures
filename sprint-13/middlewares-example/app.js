import express from "express";
import cors from "cors";

// destructuring with a default value 3001
const { PORT = 3001 } = process.env;

const app = express();

// this is a middleware
app.use(express.json());
// this is also a middleware
app.use(cors());

app.use((req, res, next) => {
  console.log("Hello! You did it a lunch request!");
  req.sandwich = {};
  next();
});

app.use((req, res, next) => {
  req.sandwich.cheese = "Mozzarela";
  next();
});

app.use((req, res, next) => {
  req.sandwich.meat = "Teriaky Chicken";
  next();
});

app.get("/:id", (req, res) => {
  if (req.body?.sandwich?.meat == req.sandwich.meat) {
    return res
      .status(201)
      .json({ message: "Here is your lunch", sandwich: req.sandwich });
  } else {
    return res.status(400).json({
      message: "Go to the back of the line again to order a new one!",
    });
  }
});

app.listen(PORT, () => {
  console.log("Server started!", PORT);
});
