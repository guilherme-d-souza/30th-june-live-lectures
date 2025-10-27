import { validateToken } from "../utils/token.js";
import UserModel from "../models/userModel.js";

// middleware
// req/request
// res/response
// next

// 1. check if the token is valid
// 2. if is not, send 401
// 3. if is valid, go to the next function with the user information

export const authMiddleware = async (req, res, next) => {
  // thats the reason to the key on the frontend
  const { authorization } = req.headers;

  // const authorization = "Bearer LIKAHSD13NB123JB12HGBVBKJBN3HBUK1GB23KJ12BK3";

  if (authorization == null || !authorization.startsWith("Bearer ")) {
    return res.status(401).send({ message: "Authorization required" });
  }

  // replace function give to us only the token
  const token = authorization.replace("Bearer ", "").trim();
  // const token = authorization.split(" ")[1];
  let payload;

  // you have to use try catch on the verify function
  try {
    // st -> JWT
    // nd -> secret key
    payload = validateToken(token);
    // added a extra validation to see if the user was deleted
    const user = await UserModel.findById(payload.idBananas);
    if (!user) {
      // return next(new UnauthorizedError({
      //   statusCode: 401,
      //   customMessage: "Authorization required! User doesn't exists",
      // });
      return res
        .status(401)
        .send({ message: "Authorization required! User doesn't exists" });
    }
  } catch (err) {
    console.error(err);
    // here the token was invalid
    return res
      .status(401)
      .send({ message: "Authorization required! Token Error" });
  }

  // this is a hack into express
  // manipulating the request object
  // create a property inside the request to have access to which
  // user is doing the action
  req.userCoconut = payload;

  next(); // next its used on the auth middleware when is successfull
};
