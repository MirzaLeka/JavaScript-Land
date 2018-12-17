
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

oneClass.style.height = '50px';
oneClass.style.width = '150px';
oneClass.style.background = 'green';

// but as I said there is another way we can do this and it will apply changes to all classes within container class

// first we need to spread container into an array
container = [...container];

container.map((cont) => {
  cont.style.height = '120px'; // This will override the previous element, oneClass
  cont.style.width = '150px'; 
  cont.style.background = 'blue'; 
  cont.style.marginTop = '20px'; 
});


// c) document.getElementsByTagName

// Similar to className, gets all elements with the same tag

let div = document.getElementsByTagName('div');

// now let's spread this document element in an array and use map to apply styles to all div tags

div = [...div];

div.map((d) => {
  d.style.height = '50px'; // This will also override the previous styles
  d.style.width = '50px'; 
  d.style.background = 'gold'; 
  d.style.margin = '20px'; 
});


// d) document.getElementsByName => selects all elements with the same name attribute

// We can have different html tags that share the same name

let names = document.getElementsByName('someName');

names = [...names];

names.map((name) => {
  name.style.height = '75px'; // This will also override the previous element
  name.style.width = '150px'; 
  name.style.background = 'black'; 
  name.style.margin = '20px'; 
});


// e) document.querySelector 

// querySelector comes packed with all previous variations. querySelector selects the First element on the page that matches criteria.
// To select multiple, all that match criteria, we use querySelectorAll.

// To select an id, we use css selector #

const id = document.querySelector('#app');

id.style.background = 'red';

// To select class we use .

const someClass = document.querySelector('.container');

someClass.style.background = 'green';

// To select tag we simply type tag name

const tag = document.querySelector('div');

tag.style.background = 'purple';

// To select one tag with some property we use 

const someProp = document.querySelector('[placeholder]'); // in this case, this is the input tag

someProp.style.background = 'black';
someProp.style.color = 'green';

// To select Any tag with certain name we use

const anyName = document.querySelector('[name="someName"]');

anyName.style.background = 'lightgreen';

// To select Specifc tag with a certain name we use

const specificName = document.querySelector('h1[name="someName"]');

specificName.style.background = 'lightblue';


// f) document.querySelectorAll 

// since querySelector only selects one, first element on the page with such class, name, tag, querySelectorAll selects all elements
// No need to use it with id because there can only be one id

// Like above we can select class with . , tag with tag name and name with name attribute.
// Let's select all elments with the class .container

let allContainers = document.querySelectorAll('.container');

// allContianers, like getElementsByClassName and TagName above returns a Nodelist. 
// Let's look at one more way of transforming the nodelist into an array using array.from() function

allContainers = Array.from(allContainers); // does the same as spread operator

// now we can apply some styles

allContainers.map((cont) => { cont.style.background = 'grey'; });
