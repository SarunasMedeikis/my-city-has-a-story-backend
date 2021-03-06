const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  fullname: String,
  email: String,
  password: String,
  country: String,
  city: String,
  stories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Story" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
