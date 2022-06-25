const express = require('express');

const routes = express.Router();

const Usuario = require('../src/controllers/usuario.controller');

routes.get('/', Usuario.index); // lista todos os usuários
routes.post('/usuarios', Usuario.create); // cria um novo usuário   

module.exports = routes;