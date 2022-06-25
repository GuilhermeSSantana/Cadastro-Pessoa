const express = require('express');

const routes = express.Router();

const Usuario = require('../src/controllers/usuario.controller');

routes.get('/', Usuario.index);


//Rotas de Usuarios
routes.post('/api/usuarios', Usuario.create); 
routes.get('/api/usuarios', Usuario.index); 
routes.get('/usuarios.details/:_id',Usuario.details); 
routes.delete('/usuarios.delete/:_id', Usuario.delete);
routes.put('/usuarios.update', Usuario.update);

module.exports = routes;