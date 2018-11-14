import subtract, { square, sum, str } from './another';
import divide from './singleExport'; // we are importing just default export

const div = document.createElement('div');
div.style.width = '120px';
div.style.border = '2px dashed black';
div.style.paddingLeft = '20px';

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

// div.appendChild(p1);
// div.appendChild(p2);
// div.appendChild(p3);

div.append(p0, p1, p2, p3, p4); // less dry code

document.body.appendChild(div);

// subtract is default export, so it comes before the named exports
// with default export naming is not important. We can do it like below:

// import anythingWeWant, { square, add} from './another' and it will work just fine
