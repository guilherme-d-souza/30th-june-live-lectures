// position in function parameters MATTERS!
const errorHandler = (err, req, res, next) => {
  // console.log("Error happen in ", req.originalUrl);
  console.error(err); // LOGS!!! -> this is for developers
  res
    .status(500)
    .send({ message: "Unexpected error! Please try again in a few minutes!" });
  // DO NOT DO THAT
  // HACKERS!!
  //.send({ error: err.message });
};

export default errorHandler;
