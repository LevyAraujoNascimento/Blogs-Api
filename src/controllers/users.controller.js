const jwt = require('jsonwebtoken');
const { usersService } = require('../services');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await usersService.login(email, password);
  if (!user) {
    res.status(400).send({ message: 'Invalid fields' });
  } else {
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };

    const payload = {
        email,
        password,
    };

    const token = jwt.sign(payload, secret, jwtConfig);

    res.status(200).send({ token });
  }
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await usersService.isAvailable(email);
  if (user) {
    res.status(409).send({ message: 'User already registered' });
  } else {
    await usersService.createUser(displayName, email, password, image);
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };

    const payload = {
        email,
        password,
    };

    const token = jwt.sign(payload, secret, jwtConfig);

    res.status(201).send({ token });
  }
};

const listAll = async (_req, res) => {
  const users = await usersService.listAll(); 
  res.status(200).send(users);
};

module.exports = {
  login,
  createUser,
  listAll,
};