const db = require('./db');

const Event = db.sequelize.define('eventos', {
    titulo: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    local: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    dataInicio: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    dataFim: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    tipoEvento: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    idCriador: {
        type: db.Sequelize.INTEGER,
        allowNull:false
    }
    
    
});
//Event.create({titulo:"Palestra sobre astrofísica",local:"Auditório",dataInicio:"01/01/2023",dataFim:"01/01/2023",descricao:"Palestra esclarecedora sobre astrofísica",tipoEvento:"Palestra"});
//Event.sync({force:true}); //so execute essa linha uma vez

module.exports = Event;