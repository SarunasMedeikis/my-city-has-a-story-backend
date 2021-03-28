const User = require("../models/userModel");
const City = require("../models/cityModel");
const Story = require("../models/storyModel");
const mongoose = require("mongoose");

const getStoriesFromCity = (req, res) => {
  City.findOne({ name: req.params.cityName })
    .populate("stories")
    .exec((err, stories) => {
      res.status(200).json({ stories });
    });
};

module.exports = { getStoriesFromCity };
