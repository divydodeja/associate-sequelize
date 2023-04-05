const db = require("../models");

exports.addPost = async (req, res, next) => {
  try {
    if (Array.isArray(req.body)) {
      await db.Post.bulkCreate(req.body);
    } else {
      await db.Post.create({
        name: req.body.name,
        UserId: req.body.UserId,
      });
    }
    res.status(200).json({
      statusCode: 200,
      message: "Post added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      statusCode: 400,
      message: error.message,
    });
  }
};
