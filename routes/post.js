const express = require("express");
const router = express.Router();

const postController = require("../controllers/post");

router.post("/add",postController.addPost)

module.exports = router