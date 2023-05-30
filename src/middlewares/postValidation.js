const validPost = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
      res.status(400).send({ message: 'Some required fields are missing' });
    } else {
      next();
    }
  };
  
module.exports = validPost;