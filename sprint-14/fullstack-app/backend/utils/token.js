import jwt from "jsonwebtoken";
import CONFIG from "./config.js";

// NEVER SHOULD BE ADDED DO THE FRONTEND
// environment variables
const secretKey = CONFIG.JWT_SECRET;

export function createToken(userId) {
  // sign
  // st param -> payload -> user data
  // nd param -> secret-key -> e.g. a_horse_runs_fast
  // rd param -> options (obj) -> expiration date
  //                                                              1 minute
  return jwt.sign({ idBananas: userId }, secretKey, { expiresIn: "7d" });
}

// HERE IS THE ONLY PLACE THAT KNOWSSSSSS HOW TO VALIDATE A TOKEN
export function validateToken(token) {
  return jwt.verify(token, secretKey);
}
