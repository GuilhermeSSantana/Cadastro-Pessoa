const Usuario = require('../models/usuario.model');

module.exports = {

    async index(req, res) {
        return res.json({ message: 'Hello World! from Controller Usuário' });
    },
    async create(req, res) {
        const { nome, email, senha, tipo_usuario } = req.body;

        let data = {};

        let user = Usuario.findOne({ email: email });
        if (user) {
                data = { nome, email, senha, tipo_usuario}
                user = await Usuario.create(data)
                return res.status(200).json(user)
            }else{
                return res.status(500).json({ error: 'Usuário já existe' })
            }
    }   // create usuario
}
    
