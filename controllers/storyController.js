const User = require("../models/userModel");
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
          res.status(200).json({ message: "Story created" });
        }
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

module.exports = { createStory };
