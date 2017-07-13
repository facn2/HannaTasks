var test = require('tape').test;
var tapSpec = require('tap-spec');
var add = require('./add');
var todo = require('./controllers/todoController.js');


//Initial test code to test my test code :-)
test('add: add two numbers correctly', function (t) {
  var actual = add(1,2);
  var expected = 3;
  t.equal(actual, expected, 'should add two numbers correctly.');
  t.end();
})

test('Check if seed data is configured properly', function(t){
  var actual = todo.data;
  var expected = [
    {item: 'Task 1'},
    {item: 'Task 2'},
    {item: 'Task 3'}
  ];
  t.deepEqual(actual, expected);
  t.end();
})
