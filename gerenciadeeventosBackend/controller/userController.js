const User = require('../models/User');

function getUsers(req, res) {
  User.findAll().then((result) => res.json(result));
}

function getUser(req, res) {
  User.findByPk(req.params.id).then((result) => res.json(result));
}

function getUserByContact(req, res) {
  User.findOne({where: {contato:req.params.contato}})
    .then((result) => res.json(result));
}

function addUser(req, res) {
  User.create({
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    contato: req.body.contato,
    senha: req.body.senha,
    dataNascimento: req.body.dataNascimento,
    genero: req.body.genero
  }).then((result) => res.json(result));
}

async function updateUser(req, res) {
  await User.update(
    {
      senha: req.body.senha,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((result) => res.json(result));
}

async function deleteUser(req, res) {
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });

  User.getUsers().then((result) => res.json(result));
}

module.exports = { getUsers, addUser, getUser, updateUser, deleteUser , getUserByContact};