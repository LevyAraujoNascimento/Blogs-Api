const { blogPostService } = require('../services');
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
 
    res.status(201).send(result);
  }
};

const listAll = async (_req, res) => {
    const posts = await blogPostService.listAll();
    console.log(posts);
    res.status(200).send(posts);
};

const listById = async (req, res) => {
    const { id } = req.params;
    const [post] = await blogPostService.listById(id);
    if (!post) {
        res.status(404).send({ message: 'Post does not exist' });
    } else {
        res.status(200).send(post);
    }
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const [updatedPost] = await blogPostService.updatePost(id, req.user, title, content);
    console.log(updatedPost);
    if (updatedPost === false) {
        res.status(401).send({ message: 'Unauthorized user' });  
    } else {
        res.status(200).send(updatedPost);
    }
};

module.exports = {
  createPost,
  listAll,
  listById,
  updatePost,
};