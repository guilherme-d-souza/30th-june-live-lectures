import bcrypt from "bcryptjs";
// WHEN IM USING A LIBRARY
// TRY TO IMPORT THAT IN LESSER FILES

export function createHash(password) {
  return bcrypt.hashSync(password, 10);
}

export function compareHash(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}
