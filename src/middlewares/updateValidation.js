const validUpdate = (req, res, next) => {
    const { title, content } = req.body;
    if (!title || !content) {
      res.status(400).send({ message: 'Some required fields are missing' });
    } else {
      next();
    }
  };
  
module.exports = validUpdate;