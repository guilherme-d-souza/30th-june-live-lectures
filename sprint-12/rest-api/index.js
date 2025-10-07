// 1. import express
import express from "express";
import cors from "cors";

// 2. create the express app
const application = express();

// 4. always remember to add the json middleware
application.use(express.json());

// 5. add CORS
application.use(cors());

// THIS IS AN EXAMPLE
// WILL GO BACK TO THIS AFTER RESTART APP
let userInfo = {
  name: "Guilherme de Souza",
  about: "Software Engineer and TripleTen Instructor",
};

// 6. add the routes/endpoints/paths

// User routes
// GET /users/me – Get the current user’s info
application.get("/users/me", (_request, response) => {
  response.send(userInfo);
});

// PATCH /users/me – Update your profile information
application.patch("/users/me", (request, response) => {
  const updateUser = request.body;

  // property by property to updates and create
  userInfo.name = updateUser.name;
  userInfo.about = updateUser.about;

  // sending the response to the client
  return response.status(200).send("Update successfully!");
  // return "Update successfully!"; // THIS NOT CHANGE THE RESPONSE
});

// PATCH /users/me/avatar – Update avatar
application.patch("/users/me/avatar", (request, response) => {
  return response.status(501).send("Waiting to finish the function");
});
// Card routes

// GET /cards – Get all cards
// POST /cards – Create a card
// DELETE /cards/:cardId – Delete a card
// PUT /cards/:cardId/likes – Like a card
// DELETE /cards/:cardId/likes – Dislike a card

// 3. call the listen function
application.listen(3001, () => {
  console.log("The server was started!");
});
