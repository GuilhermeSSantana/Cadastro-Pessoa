const express = require('express');

const routes = express.Router();

const Usuario = require('../src/controllers/usuario.controller');
const Pessoa = require('../src/controllers/pessoa.controller');


//Rotas de Usuarios
routes.post('/api/usuarios.create', Usuario.create); //Cria um novo usuário
routes.get('/api/usuarios', Usuario.index); //Lista todos os usuários
routes.get('/api/usuarios.details/:_id',Usuario.details); //Lista um usuário específico
routes.delete('/api/usuarios.delete/:_id', Usuario.delete); //Deleta um usuário
routes.put('/api/usuarios.update', Usuario.update); //Atualiza um usuário

//Rotas de Pessoas
routes.post('/api/pessoas.create', Pessoa.create); //Criar uma nova pessoa
routes.get('/api/pessoas', Pessoa.index); //Listar todas as pessoas
routes.get('/api/pessoas.details/:_id', Pessoa.details); //Detalhar uma pessoa
routes.delete('/api/pessoas.delete/:_id', Pessoa.delete); //Deletar uma pessoa
routes.put('/api/pessoas.update', Pessoa.update); //Atualizar uma pessoa

//Rotas de Login
routes.post('/api/usuarios/login', Usuario.login); //Login de um usuário


module.exports = routes;