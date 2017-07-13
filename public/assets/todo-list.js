//Fire function when document is ready
$(document).ready(function(){

  //When add item is clicked will create item variable = to form input
  //Then create another variable called todo which is set to object
  //and item property in object is equal to item variable.
  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};

      //AJAX makes POST request to server
      //AJAX passes data to todo
      //Data is accessed through app.get todoController
      //Then updated data comes back and location.reload refreshes page
      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });
    //Delete function
    // On li click function replaces
  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      //AJAX deletes todo item
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
