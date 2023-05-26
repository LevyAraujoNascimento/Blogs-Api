const { User } = require('../models');

const login = (email, password) => User.findOne({ where: { email, password } });

module.exports = {
  login,
};