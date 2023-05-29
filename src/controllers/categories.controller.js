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

const listAll = async (_req, res) => {
    const categories = await categoriesService.listAll(); 
    res.status(200).send(categories);
};

module.exports = {
  createCategory,
  listAll,
};