
// This folder will be focused only on Jquery AJAX

// GET Method

$.ajax({
  type: "GET",
  url: "/someAPI",
  headers: {
    'key': 'value'
  },
  success (data) { // if all goes good this will fire
    console.log(data);
  },
  error(jqXhr, textStatus, error) { // else this will fire
      console.log(error);
      // jqXhr = jQuery xhr object
      // textStatus = error status (400, 401, 404...)
  }
});


// POST Method

const postData = {
  'key': 'value'  
};

$.ajax({
  type: "POST",
  url: "/someAPI",
  contentType : 'application/json',
  dataType : 'json',
  data : JSON.stringify(postData), // we need to stringify data before we send it to server
  headers: {
    'key' : 'value'
  },
  success (data) {
    console.log(data); 
  },
  error (err) {
    console.log(err);    
  }   
});


// DELETE by id

const someId = 545;

$.ajax({
  url: '/someAPI/' + someId,
  type: 'DELETE',
  headers: {
    'key' : 'value'
  },
  success (data) {
    console.log(data)
  },
  error (err) {
    console.log(err);
  }
});


// DELETE all

$.ajax({
  url: '/someAPI',
  type: 'DELETE',
  headers: {
    'key' : 'value'
  },
  success (data) { 
    console.log(data); 
  },
  error: function (err) {
    console.log(err);
  }
});


// PATCH method

$.ajax({
  url: "/someAPI/" + someId,
  data: JSON.stringify(data),
  type: 'PATCH',
  contentType: 'application/json',
  processData: false,
  dataType: 'json',
  headers: {
    'key' : 'value'
  },
  success (data) {
    console.log(data); 
  },
  error (err) {
    console.log(err);    
  }  
    
});
    