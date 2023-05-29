const Category = (sequelize, DataTypes) => {
    const category = sequelize.define('Category', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING
        },
    },
    {
      tableName: 'categories',
      timestamps: false,
      underscored: true,
    }
    );
  
    return category;
  };
  
  module.exports = Category;