
function funky(event) {
    // we pass event in our HTML

    event.preventDefault(); // we call this function to prevent page reload on form submit
  
    // event.target is our HTML form we submitted 

    console.log(event.target.children); // returns HTML collection of elements inside form ( input, input ,button )

    // we can access value of first input ( inside form ) by collection index

    console.log(event.target.children[0].value);

    // we can also access value using "name" attribute we give to HTML input tags (username and password)
    
    console.log(event.target.username.value);

    // both of these will give us value of first input field
  }
