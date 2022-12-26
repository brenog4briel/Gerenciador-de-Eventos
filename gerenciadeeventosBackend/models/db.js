const Sequelize = require('sequelize');

// Conexão com o banco de dados
const sequelize = new Sequelize('database','db-username','db-password', {
    host: 'localhost',
    dialect: 'mysql',
    query:{raw:true}
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}