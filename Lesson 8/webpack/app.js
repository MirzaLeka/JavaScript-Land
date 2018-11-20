
import isEmpty from 'lodash.isempty';

// instead of importing entire lodash we're just import one function we want to use
// Syntax: npm i --save lodash.isempty and then we import it. works for the same for lodash.isqeual and other methods
// IMPORTANT Note: We Do Not Use _ when accessing single-imported lodash methods

import subtract, { square, sum, str } from './another';
import divide from './singleExport'; // we are importing just default export
import 'jquery';

// import './styles/index.css'; // => we are importing our styles file into js
import './styles/styles.scss'; // we no longer need css files
import './styles/errorStyles.scss'; // importing from root directory / styles folder / file.scss. app.js is in root

import 'normalize.css/normalize.css'; // folder/file
// we are using normalize.css resets to reset all default styles for browsers

// import './public/img/jet.jpeg'; // import a single image

// import multiple images at once
const req = require.context('./public/img', false, /.*\.(png|gif|svg|jpe?g)$/); 
req.keys().forEach(key => req(key));

// const _ = require('lodash'); // Removed to avoid errors. This isn't the best way to import it 


const div = document.createElement('div');
div.id = 'mathDiv';

const p0 = document.createElement('p');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const p4 = document.createElement('p');

p0.innerHTML = str;
p1.innerHTML = `4 x 4 == ${square(4)} `;
p2.innerHTML = `2 + 3 == ${sum(2, 3)}`;
p3.innerHTML = `100 - 50 == ${subtract(100, 50)}`;
p4.innerHTML = `20 / 5 == ${divide(20, 5)}`;

div.append(p0, p1, p2, p3, p4); // less dry code

document.body.appendChild(div);

// subtract is default export, so it comes before the named exports
// with default export naming is not important. We can do it like below:

// import anythingWeWant, { square, add} from './another' and it will work just fine

$('body').css({
  height: '100vh',
  width: '100%',
  overflowX: 'hidden'
});

console.log(`${isEmpty('')} from Lodash!`); // no need for _ because we imported a single method
