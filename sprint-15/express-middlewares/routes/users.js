import express from express;

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.status(200).send({ message: "Hello!"});
});

export default usersRouter;