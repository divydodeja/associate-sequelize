module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define("User", {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  });
  User.associate = (models) => {
    User.hasMany(models.Post, {
      onDelete: "cascade",
    });
  };
  return User;
};
