const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const DataSchema = new mongoose.Schema({
    nome: String,   // nome do usuário 
    email: String,  // email do usuário
    senha: String,  // senha do usuário
    tipo_usuario: {type: Number, default:1}, // tipo de usuário
},{
    timestamps: true    // cria os campos created_at e updated_at
});

DataSchema.pre('save', function(next){
    if(this.isModified('senha')){
        return next();
    }
    this.senha = bcrypt.hashSync(this.senha, 10);
    next();
});

const usuarios = mongoose.model('usuarios', DataSchema);
module.exports = usuarios;