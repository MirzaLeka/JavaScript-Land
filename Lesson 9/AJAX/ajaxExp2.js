
// Here is another way of doing Ajax in Jquery and that is using Ajax methos

// GET

// get method comes with two parameters, first is url (API) and second is a callback function to manipulate the data that we fetched
$.get('someAPI', function(data) {
    console.log(data);
});

// and that's it. No xhr, no state changes, no unload. That's all there is


// POST (small)

$.post('someAPI', function(data) {
    console.log(data);
  });

// longer version

// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.post('someAPI', function() {
    alert( "success" );
  })
    .done(function() { // if it's all good
      alert( "second success" );
    })
    .fail(function() { // if it fails
      alert( "error" );
    })
    .always(function() { // will execute anyway
      alert( "finished" );
    });
   
  // Perform other work here ...
   
  // Set another completion function for the request above
  jqxhr.always(function() {
    alert( "second finished" );
  });