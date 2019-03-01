
// Event delegation s a way manipulating the DOM using events

// we don't need to create a class of list items. We can just create ul, give it onclick event and then use that event object to
// trigger events

let myList = document.getElementById('myList');

myList.addEventListener('click', function(e) {
 
  if (e.target.matches('li')) {
     e.target.classList.toggle('colorRed');
  }
  
});

let newLi = document.createElement('li');
newLi.textContent = 'Fourth';

myList.append(newLi);
