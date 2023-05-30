const { blogPostService, categoriesService } = require('../services');
const { User } = require('../models');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const user = await User.findOne({ where: { email: req.user.email } }); // Teste
 
  const post = await blogPostService.createPost(title, content, categoryIds, user.id);
  
  if (post === false) {
    res.status(400).send({ message: 'one or more "categoryIds" not found' });
  } else {
    const result = {
        id: post.id,
        title: post.title,
        content: post.content,
        userId: post.userId,
        updated: post.updated,
        published: post.published,
    };
    
    console.log(result);
    
    res.status(201).send(result);
  }
};

const listAll = async (_req, res) => {
    const categories = await categoriesService.listAll(); 
    res.status(200).send(categories);
};

module.exports = {
  createPost,
  listAll,
};