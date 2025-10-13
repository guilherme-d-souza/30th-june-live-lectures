import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.js";
import loginRouter from "./routes/login.js";
import connectToDatabase from "./database/connection.js";

const app = express();

app.use(express.json());
app.use(cors());

// user router
app.use("/users", usersRouter);
// login router
app.use("/login", loginRouter);

// not found endpoints / routes
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// internal errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something broke!");
});

app.listen(3001, () => {
  console.log("Server started at port: 3001");
  connectToDatabase();
});
