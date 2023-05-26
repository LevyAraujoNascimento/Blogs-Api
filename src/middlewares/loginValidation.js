const validLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({ message: 'Some required fields are missing' });
  } else {
    next();
  }
};

module.exports = validLogin;