const User = require("../models/userModel");
const City = require("../models/cityModel");
const Story = require("../models/storyModel");
const mongoose = require("mongoose");

const createStory = (req, res) => {
  const story = new Story();
  story.username = req.body.username;
  story.title = req.body.title;
  story.body = req.body.body;
  story.city = req.body.city;

  story
    .save()
    .then((result) => {
      User.findOne({ username: story.username }, (err, user) => {
        if (user) {
          user.stories.push(story);
          user.save();
          City.findOneOrCreate({ name: story.city }, (err, city) => {
            city.stories.push(story);
            city.save();
            res.status(200).json({ message: "Story added to City" });
          });
        }
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

const getStory = (req, res) => {
  Story.findOne({ title: req.params.title }, (err, story) => {
    if (story) {
      res.status(200).json({ story });
    }
    if (err) {
      res.status(500).json({ err });
    }
  });
};

module.exports = { createStory, getStory };
