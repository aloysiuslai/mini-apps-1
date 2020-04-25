const express = require('express')
const app = express()
const port = 8080;
const path = require('path');
const model = require('./db/model.js');

app.use(express.static('public'));

app.listen(port, ()=> console.log(`Listening on http://localhost:${port}`));
app.use(express.json()); //

app.get('/info',(req, res) => {model.findAll(res)})
app.post('/info', (req, res) => {model.submitInfo(req.body,res)})