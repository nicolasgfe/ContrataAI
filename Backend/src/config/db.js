const Sequelize = require('sequelize');
const sequelize = new Sequelize('contrataai', 'contrataai', 'D4AsqceBWOUZQi3iFfXEnZAXwv6DKjf7', {
  host: 'dpg-cph4mj821fec73ea4090-a.oregon-postgres.render.com',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // Requer SSL
      rejectUnauthorized: false // Ignora erros de certificado autoassinado (use com cautela em produção)
    }
  }
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