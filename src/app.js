const express = require('express');
const validLogin = require('./middlewares/loginValidation');
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

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
