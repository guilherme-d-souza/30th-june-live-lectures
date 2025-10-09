function notFoundRouteHandler(req, res, next) {
  res
    .status(404)
    .send("Sorry, the page you are looking for could not be found!");
}

export default notFoundRouteHandler;
