const models = require("express").Router();
const { createUser, profile } = require("./userRoutes");

models.get("/:id", profile);
models.post("/createuser", createUser);

module.exports = models;
