const express = require('express');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();

routes.get('/user', LoginController.show);
routes.get('/userid/:_id', LoginController.showId);
routes.get('/listaUsuarios', LoginController.index);
routes.post('/users', LoginController.store);
routes.delete('/removerUsuario/:email', LoginController.destroy);
routes.post('/editarUsuario', LoginController.update);

module.exports = routes;