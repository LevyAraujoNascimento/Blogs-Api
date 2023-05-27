const { User } = require('../models');

const login = (email, password) => User.findOne({ where: { email, password } });

const isAvailable = (email) => User.findOne({ where: { email } });

const createUser = async (displayName, email, password, image) => {
    const result = await User.create({
        displayName,
        email,
        password,
        image,
    });

    return result;
};

const listAll = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
};

module.exports = {
  login,
  isAvailable,
  createUser,
  listAll,
};