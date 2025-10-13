import express from "express";
import { createUser } from "../controllers/users.js";

const usersRouter = express.Router();

// create user
usersRouter.post("/", createUser);

// authenticated only route
usersRouter.get("/me", () => {});

export default usersRouter;
