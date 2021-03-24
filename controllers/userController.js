const User = require("../models/userModel");
const mongoose = require("mongoose");

export const createUser = (req, res) => {
  const user = new User();
  user.username = req.body.username;
  user.fullname = req.body.fullname;
  user.email = req.body.email;
  //TODO: ADD HASH TO PASSWORD
  user.password = req.body.password;
  user.country = req.body.country;
  user.city = req.body.city;

  user
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
