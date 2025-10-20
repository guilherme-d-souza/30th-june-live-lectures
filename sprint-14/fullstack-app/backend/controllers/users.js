import UserModel from "../models/userModel.js";
import { createHash } from "../utils/passwordHash.js";

export async function createUser(request, response) {
  const user = {
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
  };

  const userCreated = await UserModel.create({
    name: user.name.trim(),
    email: user.email.trim(),
    password: createHash(user.password.trim()), // security measures
  });

  return response.status(201).json({ message: "User created!" });
}
