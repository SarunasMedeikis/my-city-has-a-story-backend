const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  userId: String,
  title: String,
  body: String,
  comments: [{ title: String, body: String }],
});

const Story = mongoose.model("Story", storySchema);

export default Story;
