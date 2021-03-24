require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.SERVER_PORT;
const routes = require("./routes");

//Connect Mongoose
mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB connection error"));
db.once("open", () => console.log("DB Conneceted succesfully!"));

//Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Enable CORS
app.use(cors());

//Connect our routes to our app
app.use("/", routes);

app.listen(port, () => {
  console.log(
    `'My City has a story' backend listening at http://localhost:${port} `
  );
});
