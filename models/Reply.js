const mongoose = require("mongoose");

const ReplySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  body: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Reply", ReplySchema);
