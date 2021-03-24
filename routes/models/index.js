const models = require("express").Router();
const { createUser, profile } = require("./userRoutes");

models.get("/", profile);
models.get("/createuser", createUser);

module.exports = models;
