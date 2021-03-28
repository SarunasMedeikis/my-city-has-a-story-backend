const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  name: String,
  stories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Story" }],
});

citySchema.statics.findOneOrCreate = function findOneOrCreate(
  condition,
  callback
) {
  const self = this;
  self.findOne(condition, (err, result) => {
    return result
      ? callback(err, result)
      : self.create(condition, (err, result) => {
          return callback(err, result);
        });
  });
};

const City = mongoose.model("City", citySchema);

module.exports = City;
