const validEmail = (req, res, next) => {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const { email } = req.body;
    if (!regex.test(email)) {
      res.status(400).send({ message: '"email" must be a valid email' });
    } else {
      next();
    }
  };
  
  module.exports = validEmail;