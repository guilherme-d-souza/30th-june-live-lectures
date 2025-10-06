const express = require("express");

const app = express(); // CREATE AN APP INSTANCE
const port = 3001;

function authenticationMiddleware(request, response, next) {
  const isAuthorized = false;
  if (isAuthorized) {
    console.log("Authorized!");
    return next(); // next middleware in the chain
  } else {
    // respond smth
    response.status(401);
    return response.send("You don't have the permissions needed!");
  }
}

// callbackFn USE -> receives 3 params (req, res, next)
app.use(authenticationMiddleware);

// converts JSON into Javascript Objects
app.use(express.json());

// appInstance.httpMethod("/path", callbackFn)
// Route ID -> path + method
// callbackFn -> receives 2 params (req, res)
app.get("/", (request, response) => {
  console.log(request.query.name);
  response.send("Hello! It's working!");
});

app.post("/", (request, response) => {
  console.log(request.body);
  response.send("Hello! This is the POST method");
});

// app.get("/r/:communityId/comments/:id/:postTitle", (req, res) => {
//   // The value of userId is available in req.params.userId
//   res.send(
//     `You requested community with ID: ${req.params.communityId}. You requested the post with post Title: ${req.params.postTitle}`
//   );
// });

app.listen(port, () => {
  console.log("Hello!");
});
