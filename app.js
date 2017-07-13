var express = require('express');
var todoController = require('./controllers/todoController');

//setup app using express
var app = express();

//set up EJS as template engine for views. App knows
//to look for EJS code in order to render view of app.
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('Paul go to localhost:3000/todo to see your project!!!');
