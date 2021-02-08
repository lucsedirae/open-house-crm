//* Dependencies
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

//* Models
const Post = require("../models/Post");
const Reply = require("../models/Reply");

//*     @route:     GET api/forum
//*     @desc:      Get all forum posts
//*     @access:    Public
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({})
      .sort({
        date: -1
      })
      .populate("replies");
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//*     @route:     POST api/forum
//*     @desc:      Add new post
//*     @access:    Public
router.post(
  "/",
  [check("name", "Name is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //* Destructuring req.body
    const { name, title, body } = req.body;

    try {
      const newPost = new Post({
        name,
        title,
        body
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//*     @route:     PUT api/forum
//*     @desc:      Reply to a post
//*     @access:    Public
router.post(
  "/:id",
  [check("name", "Name is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    Reply.create(req.body).then(({ _id }) =>
      Post.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { replies: _id } },
        { new: true }
      )
    );

    const { name, body } = req.body;

    const newReply = {
      name,
      body,
      date: Date.now()
    };

    res.json(newReply).catch((err) => {
      console.error(err.message);
      res.status(500).send("Server Error");
    });
  }
);

//*     @route:     PUT api/forum
//*     @desc:      Reply to a post
//*     @access:    Public
router.put(
  "/:id",
  [check("name", "Name is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { likes } = req.body;

    try {
      const postLike = await Post.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { likes: likes } }
      );

      res.json(postLike);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
