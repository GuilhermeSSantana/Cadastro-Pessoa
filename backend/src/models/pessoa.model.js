const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema({
    nome: String,       // nome do usuário
    apelido: String,    // apelido do usuário
    email: String,     // email do usuário
    telefone: Number,  // telefone do usuário
    endereco: String,  // endereço do usuário
},{
    timestamps: true    
});

const pessoa = mongoose.model('Pessoa', DataSchema);
module.exports = pessoa;