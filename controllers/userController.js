const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const login = (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.status(200).json({ user });
      } else {
        res.status(500).json({ message: "Incorrect username or password." });
      }
    } else {
      res
        .status(500)
        .json({
          message:
            "Issue finding user, if the error persists contact administrator",
        });
    }
  });
};

const createUser = (req, res) => {
  const user = new User();
  user.username = req.body.username;
  user.fullname = req.body.fullname;
  user.email = req.body.email;

  user.country = req.body.country;
  user.city = req.body.city;

  const hash = bcrypt.hashSync(req.body.password, salt);
  user.password = hash;

  user
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

const profile = (req, res) => {
  User.findById(req.params.id, (err, docs) => {
    if (err) {
      res.status(500).json({ err });
    } else {
      res.status(200).json(docs);
    }
  });
};

module.exports = { createUser, profile, login };
