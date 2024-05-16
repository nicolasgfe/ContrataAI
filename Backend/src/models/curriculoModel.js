const Sequelize = require('sequelize');
const database = require('../config/db');

const Curriculo = database.define('curriculo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    genero: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    grauEscolaridade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nacionalidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricaoPessoal: {
        type: Sequelize.STRING(500)
    },
    descricaoProfissional: {
        type: Sequelize.STRING(500)
    },
});

module.exports = Curriculo;
