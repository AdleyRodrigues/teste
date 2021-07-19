const db = require('./db');

const Conta = db.sequelize.define('conta', {
    nome: {
        type: db.Sequelize.STRING
    },
    usuario: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
})

module.exports = Conta;