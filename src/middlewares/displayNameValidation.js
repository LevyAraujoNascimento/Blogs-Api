const validDisplayName = (req, res, next) => {
    const { displayName } = req.body;
    const LIMIT = 8;
    if (displayName.length < LIMIT) {
      res.status(400).send({ message: '"displayName" length must be at least 8 characters long' });
    } else {
      next();
    }
  };
  
module.exports = validDisplayName;