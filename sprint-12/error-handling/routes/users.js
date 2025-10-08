import express from "express";
import { getUserInfo, updateProfileInfo } from "../controllers/users.js";

const usersRouter = express.Router();

// GET /users/me – Get the current user’s info
usersRouter.get("/users/me", getUserInfo);

// PATCH /users/me – Update your profile information
usersRouter.patch("/users/me", updateProfileInfo);

// PATCH /users/me/avatar – Update avatar
usersRouter.patch("/users/me/avatar", (request, response) => {
  const a = b;
  return response.status(501).send("Waiting to finish the function");
});

export default usersRouter;
