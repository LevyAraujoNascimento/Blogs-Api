const validName = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
      res.status(400).send({ message: '"name" is required' });
    } else {
      next();
    }
  };
  
module.exports = validName;