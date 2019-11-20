const express = require('express');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();

routes.get('/user', LoginController.show);
routes.get('/listaUsuarios', LoginController.index);
routes.post('/users', LoginController.store);
routes.delete('/removerUsuario/:email', LoginController.destroy);
routes.put('/editarUsuario', LoginController.update);

module.exports = routes;