import express from "express";
import { tokenLogin } from "../controllers/login.js";

const loginRouter = express.Router();

// doing authentication -> HTTP method POST
loginRouter.post("/", tokenLogin);

export default loginRouter;
