
// for in => used to iterate over object props

const user = { name: 'mirza', age: 24, favLng: 'JS' };

for(let i in user) {
console.log(`${i}: ${user[i]}`); 
}

/* output:
name: mirza
age: 24
favLng: JS
*/

const arr = [10, 20, 30, 40, 50];

// This won't work. With arrays we need to use for of loop
for(let i in arr) {
console.log(`${i}: arr[i]`);
} 
/* output:
0: arr[i]
1: arr[i]
2: arr[i]
3: arr[i]
4: arr[i]
*/

// for of => used to iterate over arrays
for (let i of arr) {
console.log(i);
}
/* output:
10
20
30
40
50
*/
