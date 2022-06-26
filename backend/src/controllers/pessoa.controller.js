const Pessoa = require("../models/pessoa.model");

module.exports = {
  async index(req, res) {
    const person = await Pessoa.find();
    return res.json(person);
  },
  async create(req, res) {
    const { nome, apelido, email, telefone, endereco } = req.body;

    let data = {};

    let person = Pessoa.findOne({nome: nome});

    if (person) {
      data = { nome, apelido, email, telefone, endereco };
      person = await Pessoa.create(data);
      return res.status(200).json(person);
    } else {
      return res.status(500).json(person);
    }
  },
  async details(req, res) {
    const {_id} = req.params;
    const person = await Pessoa.findOne({_id});
    return res.json(person);
  },
    async delete (req, res) {
        const {_id} = req.params;
        const person = await Pessoa.findOneAndDelete({_id});
        return res.json(person);
    },
    async update (req, res) {
        const {_id, nome, apelido, email, telefone, endereco} = req.body;
        const data = {nome, apelido, email, telefone, endereco};

        const person = await Pessoa.findOneAndUpdate({_id}, data, {new: true});
        res.json(person);
    }
};