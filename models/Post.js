//* Dependencies
const mongoose = require("mongoose");

//* Mongo DB schema
const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String
  },
  likes: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  replies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reply"
    }
  ]
});

module.exports = mongoose.model("Post", PostSchema);
