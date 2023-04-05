module.exports = (sequelize, Datatypes) => {
  const Post = sequelize.define("Post", {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  });
  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Post;
};
