const express = require('express');
const routes = require('./routes/rotas');
const db = require('./models/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.listen(8082,function(req,res) {
    console.log('Servidor rodando na porta 8082');
})
