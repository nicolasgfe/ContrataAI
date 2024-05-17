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
        type: Sequelize.DATEONLY
    },
    genero: { 
        type: Sequelize.STRING
    },
    grauEscolaridade: {
        type: Sequelize.STRING
    },
    nacionalidade: {
        type: Sequelize.STRING
    },
    descricaoPessoal: {
        type: Sequelize.STRING(500)
    },
    descricaoProfissional: {
        type: Sequelize.STRING(500)
    },
    curriculo: {
        type: Sequelize.STRING
    },
});

module.exports = Curriculo;
