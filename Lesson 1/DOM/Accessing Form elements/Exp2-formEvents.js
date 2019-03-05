
function funky(event) {
    event.preventDefault();
    
    event.target.children[2].style.background = 'black';
    
    console.log(event.target.password.value);
  }

