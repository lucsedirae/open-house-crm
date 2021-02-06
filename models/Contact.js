//* Dependencies
const mongoose = require("mongoose");

//* Mongo DB schema
const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  streetNumber: {
    type: String,
  },
  street: {
    type: String,
  },
  address2: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  type: {
    type: String,
    default: "personal",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  note: {
    type: String
  }
});

module.exports = mongoose.model("contact", ContactSchema);
