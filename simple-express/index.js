const express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
  res.render('index')
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
