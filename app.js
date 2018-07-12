const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));

/*const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple'
];*/

const people = [
  ['Tom', 'Ford'],
  ['Calvin', 'Klein'],
  ['Georgio', 'Armani']
];

app.set('view engine', 'pug');

app.get('/',(req, res) => {
  res.render('index');
});

app.get('/cards',(req, res) => {
  res.locals.prompt = "Who is buried in Grant's tomb?";
  res.locals.hint = "Think about whose tomb it is...";
  //res.locals.colors = colors;
  res.render('card');
});

app.get('/people',(req,res) => {
  res.locals.people = people;
  res.render('people');
});

app.get('/hello',(req,res) => {
  res.render('hello');
});

app.post('/hello',(req,res) => {
  console.dir(req.body)
  res.render('hello');
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000!');
});
