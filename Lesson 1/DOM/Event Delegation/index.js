
// Event delegation s a way manipulating the DOM using events

// we don't need to create a class of list items. We can just create ul, give it onclick event and then use that event object to
// trigger events

let myList = document.getElementById('myList');

myList.addEventListener('click', function(e) { // e === event
 
  if (e.target.matches('li')) { // once we click on ul, we check if user clicked on any li item
     e.target.classList.toggle('colorRed'); // if so change color of li item you clicked on to red
  }
  
});

// if we create new list item and append it to myList ul, we'll still be able to use event delegation on it
let newLi = document.createElement('li');
newLi.textContent = 'Fourth';

myList.append(newLi);
