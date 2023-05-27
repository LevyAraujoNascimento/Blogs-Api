const express = require('express');
const validLogin = require('./middlewares/loginValidation');
const validDisplayName = require('./middlewares/displayNameValidation');
const validEmail = require('./middlewares/emailValidation');
const validPassword = require('./middlewares/passwordValidation');
const controllers = require('./controllers/index');
// ...

const app = express();

// não remova ou mova esse endpoint Testando
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.post('/login', validLogin, controllers.usersController.login);

app.post(
  '/user',
  validDisplayName,
  validEmail,
  validPassword,
  controllers.usersController.createUser,
);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
