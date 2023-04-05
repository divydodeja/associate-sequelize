const db = require("../models");

exports.addUser = async (req, res, next) => {
  try {
    if (Array.isArray(req.body)) {
      await db.User.bulkCreate(req.body);
    } else {
      await db.User.create({
        username: req.body.username,
        email: req.body.email,
      });
    }
    res.status(200).json({
      statusCode: 200,
      message: "User added successfully",
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      message: error.message,
    });
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const data = await db.User.findAll({
      include: [db.Post],
    });
    res.status(200).json({
      statusCode: 200,
      message: "Users fetched successfully",
      data: data,
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      statusCode: 400,
      message: error.message,
    });
  }
};
