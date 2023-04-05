const express = require("express");

const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRoutes = require("./routes/user");
app.use("/api/user", userRoutes);

const postRoutes = require("./routes/post");
app.use("/api/post", postRoutes);

db.sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`listening at: http://localhost:${PORT}`);
  });
});
