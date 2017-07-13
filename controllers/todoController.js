var bodyParser = require('body-parser');

//Dummy Data to seed todo list & pass into app.get

var data = [
  {item: 'Task 1'},
  {item: 'Task 2'},
  {item: 'Task 3'}
];


//Middle Ware
var urlencodedParser = bodyParser.urlencoded({extended: false});

// module.exports =
//Make handlers for different requests
module.exports = function(app){
//Handles data being requested on todo list
app.get('/todo', function(req, res){
res.render('todo', {todos: data});
});
//Handles data being posted on todo list
app.post('/todo', urlencodedParser, function(req, res){
    data.push(req.body); // pushed new data to data array
    res.json(data); // send data back to the front-end
});
//Handles data being deleted from todo list
app.delete('/todo/:item', function(req, res){
  data = data.filter(function(todo){
    return todo.item.replace(/ /g, '-') !== req.params.item;
  });
  res.json(data);
});

};
//makes server fail but tests work
// module.exports = {data};
