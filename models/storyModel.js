const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  username: String,
  title: String,
  body: String,
  comments: [{ title: String, body: String }],
  city: String,
  createdAt: { type: Date, default: Date.now },
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;
