// const jwt = require('jsonwebtoken');
const { categoriesService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await categoriesService.createCategory(name);

  if (!category) {
    res.status(404).send({ message: 'failed to create Category' });
  } else {
    res.status(201).send(category);
  }
};

module.exports = {
  createCategory,
};