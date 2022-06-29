const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const DataSchema = new mongoose.Schema({
    nome: String,   // nome do usuário 
    email: String,  // email do usuário
    senha: String,  // senha do usuário
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

DataSchema.pre('findOneAndUpdate', function(next){
    var password = this.getUpdate().senha+'';
    if(password.length<55){
        this.getUpdate().senha = bcrypt.hashSync(password, 10);
    }
    next();
});

DataSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.senha, function(err, same) {
        if(err){
            callback(err);
        }else{
            callback(null, same);
        }
    });
}

const usuarios = mongoose.model('usuarios', DataSchema);
module.exports = usuarios;