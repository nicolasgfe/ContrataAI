const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost', //Host URL interna Render
  dialect: 'postgres',
//  dialectOptions: {
//    ssl: {
//      require: true, // Requer SSL
//      rejectUnauthorized: false // Ignora erros de certificado autoassinado (use com cautela em produção)
//    }
//  }
});

// Testa a conexão
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

// Chama a função de teste de conexão
testConnection();



module.exports = sequelize;