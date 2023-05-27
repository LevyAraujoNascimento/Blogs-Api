const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      displayName: {
        allowNull: false,
        field: 'display_name',
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING
      },
  },
  {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  }
  );

  return user;
};

module.exports = User;