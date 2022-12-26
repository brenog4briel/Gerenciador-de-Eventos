const db = require('./db');

const User = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    sobrenome: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    contato: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
    
});

//User.sync({force:true}); //so execute essa linha uma vez

module.exports = User;