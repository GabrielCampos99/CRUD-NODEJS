const express = require("express");
const { modelNames } = require("mongoose");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:idPost", async (req, res) => {
  try {
    const post = await Post.findById(req.params.idPost);
    res.json(post);
  } catch (err) {}
});

//deletando um post especifico
router.delete("/:idPost", async (req, res) => {
  try {
    const postRemoved = await Post.remove({ _id: req.params.idPost });
    res.json(postRemoved);
  } catch (err) {
    res.json({ message: err });
  }
});

//Atualizando um post (UPDATE)
router.patch("/:idPost", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.idPost },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
