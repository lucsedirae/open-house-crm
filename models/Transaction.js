//* Dependencies
const mongoose = require("mongoose");

//* Mongo DB schema
const TransactionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  type: {
    type: String,
    required: true
  },
  trxName: {
    type: String,
    required: true
  },
  cost: {
    type: Number
  },
  revenue: {
    type: Number
  },
  dateOpened: {
    type: Date,
    default: Date.now,
    required: true
  },
  dateClosed: {
    type: Date
  },
  expectedCloseDate: {
    type: Date,
    required: true
  }
});

//* Exports schema
module.exports = mongoose.model("transaction", TransactionSchema);
