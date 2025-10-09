import { notFound } from "../errorHandlers/notFound.js";
import UserModel from "../models/userModel.js";

export function getUserInfo(_request, response) {
  UserModel.findOne().then((user) => {
    if (user == null) {
      return notFound(response);
    }
    return response.send(user);
  });
}

export function updateProfileInfo(request, response) {
  const updateUser = request.body;

  // property by property to updates and create
  UserModel.findOne().then((user) => {
    user.about = updateUser.about;
    user.name = updateUser.name;
    user.save(); // this will persist the data on the database
    return response.status(200).send({ message: "Update successfully!" });
  });
}
