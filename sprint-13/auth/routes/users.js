import express from "express";
import { createUser } from "../controllers/users.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const usersRouter = express.Router();

// create user
usersRouter.post("/", createUser);

// authenticated only route
usersRouter.use(authMiddleware);
usersRouter.get("/me", (req, res) => {
  // req.userCoconut -> authMiddleware
  // idBananas ->
  console.log(req.userCoconut.idBananas); // could check the database and update a field like lastUpdatedBy: req.user.id
  return res.json({ message: "Hello!" });
});

export default usersRouter;
