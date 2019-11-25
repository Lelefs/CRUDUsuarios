//INDEX = listagem de vários usuários;
//SHOW = mostrar um único usuário;
//STORE = criar um usuário;
//UPDATE = editar um usuário;
//DESTROY = deletar um usuário

const User = require('../models/User');

module.exports = {
    async show(req, res) {
        const { email } = req.query;

        const user = await User.findOne({ email })

        return res.json(user);
    },

    async showId(req, res) {
        const { _id } = req.params;

        const user = await User.findOne({ _id })

        return res.json(user);
    },

    async index(req, res) {
        const { email, nome, sobrenome, tipo } = req.query;
        let params = {};
        email ? params.email = email : null;
        nome ? params.nome = nome : null;
        sobrenome ? params.sobrenome = sobrenome : null;
        tipo ? params.tipo = tipo : null;

        const user = await User.find( params )

        return res.json(user);
    },

    async store(req, res) {
        const { nome, sobrenome, tipo, email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ nome, sobrenome, tipo, email });
        } else {
            return res.json('Já existe um usuário com esse email.');    
        }

        return res.json(user);
    },

    async destroy(req, res) {
        const { email } = req.params;

        await User.deleteOne({ email });

        return res.json('Usuário deletado com sucesso');
    },

    async update(req, res) {
        const { _id, nome, sobrenome, email, tipo } = req.body;

        let params = {};
        nome ? params.nome = nome : null;
        sobrenome ? params.sobrenome = sobrenome : null;
        email ? params.email = email : null;
        tipo ? params.tipo = tipo : null;

        let user = await User.updateOne({ _id }, params )

        return res.json('Usuário editado com sucesso');
    }
};