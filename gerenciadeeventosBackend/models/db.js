const Sequelize = require('sequelize');

// Conexão com o banco de dados
const sequelize = new Sequelize('gerenciaeventos','root','mortadela2020', {
    host: 'localhost',
    dialect: 'mysql',
    query:{raw:true}
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}