const express = require('express');
const controllers = require('./controllers/index');
const validLogin = require('./middlewares/loginValidation');
const validDisplayName = require('./middlewares/displayNameValidation');
const validEmail = require('./middlewares/emailValidation');
const validPassword = require('./middlewares/passwordValidation');
const validToken = require('./middlewares/jwtValidation');
const validName = require('./middlewares/nameValidation');
const validPost = require('./middlewares/postValidation');
const validUpdate = require('./middlewares/updateValidation');
// ...

const app = express();

// não remova ou mova esse endpoint Testando
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.post('/login', validLogin, controllers.usersController.login);

app.get('/user', validToken, controllers.usersController.listAll);

app.get('/user/:id', validToken, controllers.usersController.listById);

app.delete('/user/me', validToken, controllers.usersController.deleteUser);

app.post(
  '/user',
  validDisplayName,
  validEmail,
  validPassword,
  controllers.usersController.createUser,
);

app.get('/categories', validToken, controllers.categoriesController.listAll);

app.post('/categories', validToken, validName, controllers.categoriesController.createCategory);

app.post('/post', validToken, validPost, controllers.blogPostController.createPost);

app.get('/post', validToken, controllers.blogPostController.listAll);

app.get('/post/:id', validToken, controllers.blogPostController.listById);

app.put('/post/:id', validToken, validUpdate, controllers.blogPostController.updatePost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
