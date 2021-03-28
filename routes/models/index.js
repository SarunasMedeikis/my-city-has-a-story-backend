const models = require("express").Router();
const {
  createUser,
  profile,
  login,
} = require("../../controllers/userController");
const { createStory, getStory } = require("../../controllers/storyController");
const { getStoriesFromCity } = require("../../controllers/cityController");

models.get("/user/:id", profile);
models.post("/user/createuser", createUser);
models.post("/user/createstory", createStory);

models.get("/stories/:cityName", getStoriesFromCity);
models.get("/story/:title", getStory);
models.post("/user/login", login);

module.exports = models;
