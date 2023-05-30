const { BlogPost, Category, PostCategory } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
    const updated = new Date();
    const published = new Date();
   
    const result = await BlogPost.create({
        title,
        content,
        userId,
        updated,
        published,
    }); 
    
    const categories = await Category.findAll();
    const categoriesId = categories.map((element) => element.dataValues.id);

    if (categoriesId.toString() !== categoryIds.toString()) {
        return false;
    }

    await categoryIds.map(async (element) => {
        await PostCategory.create({ postId: result.id, categoryId: element });
    });

    return result;
};

module.exports = {
  createPost,
};