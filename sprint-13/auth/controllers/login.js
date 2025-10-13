import UserModel from "../models/userModel.js";
import { compareHash } from "../utils/passwordHash.js";
import { createToken } from "../utils/token.js";

export async function tokenLogin(request, response) {
  // const user = request.body;
  const loginData = {
    email: request.body.email,
    password: request.body.password,
  };

  // 1. get the user by email
  const userFromDatabase = await UserModel.findOne({ email: loginData.email });

  // if user doesnt exists
  if (userFromDatabase == null) {
    return response
      .status(404)
      .json({ message: `User with email ${loginData.email} was not found!` });
    // .status(401)
    // .json({ message:  "Credentials invalid!" });
  }

  // if user password is wrong
  if (!compareHash(loginData.password, userFromDatabase.password)) {
    return response.status(401).json({ message: "Credentials invalid!" });
  }

  // if it's all good
  return response
    .status(200)
    .json({ token: createToken(userFromDatabase._id) });
}
