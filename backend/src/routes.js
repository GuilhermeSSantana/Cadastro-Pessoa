const express = require('express');

const routes = express.Router();

const Usuario = require('../src/controllers/usuario.controller');
const Pessoa = require('../src/controllers/pessoa.controller');

routes.get('/', Usuario.index);


//Rotas de Usuarios
routes.post('/api/usuarios', Usuario.create); //Cria um novo usuário
routes.get('/usuarios.create', Usuario.index); //Lista todos os usuários
routes.get('/usuarios.details/:_id',Usuario.details); //Lista um usuário específico
routes.delete('/usuarios.delete/:_id', Usuario.delete); //Deleta um usuário
routes.put('/usuarios.update', Usuario.update); //Atualiza um usuário

//Rotas de Pessoas
routes.post('/pessoas.create', Pessoa.create); //Criar uma nova pessoa
routes.get('/api/pessoas', Pessoa.index); //Listar todas as pessoas
routes.get('/pessoas.details/:_id', Pessoa.details); //Detalhar uma pessoa
routes.delete('/pessoas.delete/:_id', Pessoa.delete); //Deletar uma pessoa
routes.put('/pessoas.update', Pessoa.update); //Atualizar uma pessoa

module.exports = routes;