
// DOM Selectors

// a) document.getElementById => id is unique so this will only select one element

// Whenever you come across Javascript DOM selectors the most common one you'll encounter is document.getElementById
// Let's select an element with an id of app and store it into a variable

const app = document.getElementById('app');

// app now becomes a document object meaning that any method apply on DOM, we can now apply using our app variable

app.style.height = '100px'; // giving some styles to the element we welected
app.style.width = '100px'; 
app.style.background = 'red'; 


// b) document.getElementsByClassName => selects mulitple elements with the same class

// Let's select all elements with container class and store it in a variable container

let container = document.getElementsByClassName('container');

// Because now we are in control of multiple elements we can apply css to just one, but we can also apply css to all of them

// Just one

const oneClass = container[0]; // because container variable is a sum of all elements with the class container

// now we can add styles to this element

oneClass.style.height = "50px";
oneClass.style.width = "150px";
oneClass.style.background = "green";

// but as I said there is another way we can do this and it will apply changes to all classes within container class

// first we need to spread container into an array
container = [...container];

container.map(cont => {
    cont.style.height = '120px'; // This will override the previous element, oneClass
    cont.style.width = '150px'; 
    cont.style.background = 'blue'; 
    cont.style.marginTop = '20px'; 
});


// c) document.getElementsByTagName


// d) document.getElementsByName


// e) document.querySelector


// f) document.querySelectorAll





