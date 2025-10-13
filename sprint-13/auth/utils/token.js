import jwt from "jsonwebtoken";

const secretKey = "a_horse_runs_fast";

export function createToken(userId) {
  // sign
  // st param -> payload -> user data
  // nd param -> secret-key -> e.g. a_horse_runs_fast
  // rd param -> options (obj) -> expiration date
  //                                                               1 minute
  return jwt.sign({ idBananas: userId }, secretKey, { expiresIn: "1h" });
}

export function validateToken(token) {
  return jwt.verify(token, secretKey);
}
