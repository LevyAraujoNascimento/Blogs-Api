const validPassword = (req, res, next) => {
    const { password } = req.body;
    const LIMIT = 6;
    if (password.length < LIMIT) {
      res.status(400).send({ message: '"password" length must be at least 6 characters long' });
    } else {
      next();
    }
  };
  
module.exports = validPassword;