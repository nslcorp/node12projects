const express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

const PORT = 5001

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
  res.render('index', {title: 'App: SimpleExample'})
});

app.get('/list', function (req, res) {
  res.render('list')
});

app.get('/form', function (req, res) {
  res.render('form')
});

app.listen(PORT, function () {
  console.log('Example app listening on port: ' + PORT);
});
