app.post("/signin", (req, res) => {
  //client
  // {
  //  "email": "guilherme@tripleten.com",
  //  "password": "bananas"
  // }
  const { email, password } = req.body;

  // User -> mongoose model
  // findOne(params) -> receive any field from the User schema
  // will filter the user by email
  // return undefined or an user
  User.findOne({ email })
    .then((user) => {
      // user -> undefined or { _id:"", name, ... }
      if (user == null) {
        return res.status(401).send("Incorrect password or email");
        // handle by the error handler
        // return Promise.reject(new Error("Incorrect password or email"));
      }
      //
      const isPasswordCorrect = bcrypt.compareSync(password, user.password);

      if (!isPasswordCorrect) {
        return res.status(401).send("Incorrect password or email");
      }

      const token = createToken(user);
      return res.status(200).json({ token });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
});

app.post("/signup", (req, res) => {
  // signup === create an user
  // i need email, name, password
  // where this data come from?
  // i need validate these stuff
  // if the validation fails, should return an error
  // save in the database
  // return a status code that is related to create smth
});
