import usersRouter from "./users";
import express from express;

const router = express.Router();

router.use("/users", usersRouter);

export default router;