const routes = require("express").Router();
const models = require("./models");

routes.use("/user", models);

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!" });
});

module.exports = routes;
