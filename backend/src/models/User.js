const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true,
        default: 'U'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema);