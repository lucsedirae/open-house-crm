//* Dependencies
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

//* Models
const Transaction = require("../models/Transaction");
const User = require("../models/User");

//* @route: GET api/transactions
//* @desc: Get user's transactions
//* @access: Private
router.get("/", auth, async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(transactions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//* @route: POST api/transactions
//* @desc: Add new transaction
//* @access: Private
router.post(
  "/",
  [auth, [check("trxName", "Transaction name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //* Destructuring req.body
    const {
      trxName,
      type,
      cost,
      revenue,
      dateOpened,
      dateClosed,
      expectedCloseDate,
    } = req.body;

    try {
      const newTransaction = new Transaction({
        trxName,
        type,
        cost,
        revenue,
        dateOpened,
        dateClosed,
        expectedCloseDate,
        user: req.user.id,
      });

      const transaction = await newTransaction.save();

      res.json(transaction);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//* @route: PUT api/transactions:id
//* @desc: Update transaction
//* @access: Private
router.put("/:id", auth, async (req, res) => {
  const {
    trxName,
    type,
    cost,
    revenue,
    dateOpened,
    dateClosed,
    expectedCloseDate,
  } = req.body;

  //* Build transaction object
  const transactionFields = {};
  if (trxName) transactionFields.trxName = trxName;
  if (type) transactionFields.type = type;
  if (cost) transactionFields.cost = cost;
  if (revenue) transactionFields.revenue = revenue;
  if (dateOpened) transactionFields.dateOpened = dateOpened;
  if (dateClosed) transactionFields.dateClosed = dateClosed;
  if (expectedCloseDate)
    transactionFields.expectedCloseDate = expectedCloseDate;

  try {
    //*Searches database for transaction associated with requested id
    let transaction = await Transaction.findById(req.params.id);

    if (!transaction)
      return res.status(404).json({ msg: "Transaction not found" });

    //* Ensure user owns transaction
    if (transaction.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized!" });
    }

    transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { $set: transactionFields },
      { new: true }
    );

    res.json(transaction);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//* @route: DELETE api/transactions/:id
//* @desc: Delete transaction
//* @access: Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let transaction = await Transaction.findById(req.params.id);

    if (!transaction)
      return res.status(404).json({ msg: "Transaction not found" });

    //* Ensure user owns transaction
    if (transaction.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Transaction.findByIdAndRemove(req.params.id);

    res.json({ msg: "Transaction removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
