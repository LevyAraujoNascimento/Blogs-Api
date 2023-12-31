const { Category } = require('../models');

const createCategory = async (name) => {
    const result = await Category.create({
        name,
    });

    return result;
};

const listAll = async () => {
    const result = await Category.findAll();
    return result;
};

module.exports = {
  createCategory,
  listAll,
};