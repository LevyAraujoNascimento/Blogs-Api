const BlogPost = (sequelize, DataTypes) => {
    const post = sequelize.define('BlogPost', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING
      },
      userId: {
        allowNull: false,
        field: 'user_id',
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id',
          },
      },
      published: {
        allowNull: true,
        type: DataTypes.DATE
      },
      updated: {
        allowNull: true,
        type: DataTypes.DATE
      },
    },
    {
      tableName: 'blog_posts',
      timestamps: false,
      underscored: true,
    }
    );
  
    post.associate = (models) => {
      post.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });    
    };

    return post;
  };
  
  module.exports = BlogPost;