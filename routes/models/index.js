const models = require("express").Router();
const { createUser, profile } = require("../../controllers/userController");
const { createStory } = require("../../controllers/storyController");

models.get("/:id", profile);
models.post("/createuser", createUser);
models.post("/createstory", createStory);

module.exports = models;
