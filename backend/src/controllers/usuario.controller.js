const Usuario = require("../models/usuario.model");
const jwt = require("jsonwebtoken");
const secret = "mysecret";

module.exports = {
  async index(req, res) {
    const user = await Usuario.find();
    return res.json(user);
  },
  async create(req, res) {
    const { nome, email, senha } = req.body;

    let data = {};

    let user = Usuario.findOne({ email: email });

    if (user) {
      data = { nome, email, senha };
      user = await Usuario.create(data);
      return res.status(200).json(user);
    } else {
      return res.status(500).json({ error: "Usuário já existe" });
    }
  },
  async details(req, res) {
    const { _id } = req.params;
    const user = await Usuario.findOne({ _id });
    return res.json(user);
  },
  async delete(req, res) {
    const { _id } = req.params;
    const user = await Usuario.findOneAndDelete({ _id });
    return res.json(user);
  },
  async update(req, res) {
    const { _id, nome, email, senha } = req.body;
    const data = { nome, email, senha };

    const user = await Usuario.findOneAndUpdate({ _id }, data, { new: true });
    res.json(user);
  },
  async login(req, res) {
    const { email, senha } = req.body;
    Usuario.findOne({email:email}, function(err, user){
      if(err){
        console.log(err);
        res.status(200).json({erro: "Erro ao logar, tente novamente"});
      }else if(!user){
        res.status(200).json({statu:2,erro: "Email não confere"});
      }else{
        const payload = {email};
        const token = jwt.sign(payload, secret, {
          expiresIn: "2h"
        }) 
        res.cookie('token', token, {httpOnly:true});
        res.status(200).json({statu:1, auth:true, token:token, user:user});
      }
      }
    );
  }
};
