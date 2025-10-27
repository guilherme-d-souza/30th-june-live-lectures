import express from "express";
import cors from "cors";
import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

// not found endpoints / routes
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// internal errors
app.use((err, req, res, next) => {
  console.error(err);

  const { statusCode = 500, customMessage = "Something broke!" } = err;

  res.status(statusCode).send(customMessage);
});

app.listen(3001, () => {
  console.log("Server is listening!");
});
