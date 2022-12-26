const Event = require('../models/Event');

function getEvents(req, res) {
  Event.findAll().then((result) => res.json(result));
}

function getEvent(req, res) {
  Event.findByPk(req.params.id).then((result) => res.json(result));
}

function addEvent(req, res) {
  Event.create({
    titulo: req.body.titulo,
    local: req.body.local,
    dataInicio: req.body.dataInicio,
    dataFim: req.body.dataFim,
    descricao: req.body.descricao,
    tipoEvento: req.body.tipoEvento,
    idCriador: req.body.idCriador
  }).then((result) => res.json(result));
}

async function updateEvent(req, res) {
  await Event.update(
    {
      titulo: req.body.titulo,
      local: req.body.local,
      dataInicio: req.body.dataInicio,
      dataFim: req.body.dataFim,
      descricao: req.body.descricao,
      tipoEvento: req.body.tipoEvento,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((result) => res.json(result));
}

async function deleteEvent(req, res) {
  await Event.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => res.json(result));

}

module.exports = { getEvents, addEvent, getEvent, updateEvent, deleteEvent };