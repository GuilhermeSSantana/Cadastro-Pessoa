const Usuario = require("../models/usuario.model");

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
    const {_id} = req.params;
    const user = await Usuario.findOne({_id});
    return res.json(user);
  },
    async delete (req, res) {
        const {_id} = req.params;
        const user = await Usuario.findOneAndDelete({_id});
        return res.json(user);
    },
    async update (req, res) {
        const {_id, nome, email, senha, tipo_usuario} = req.body;
        const data = {nome, email, senha, tipo_usuario};

        const user = await Usuario.findOneAndUpdate({_id}, data, {new: true});
        res.json(user);
    }
};
