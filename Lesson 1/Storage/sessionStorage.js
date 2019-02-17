
// Very simlar to localStorage, sessionStroge is used to save information in the browser.
// Where localStorage lasts forever, sessionStorage is removed when tab we're currently on closes (when session is over).

// Commands are also nearly the same
// Same rules apply


// SET item
sessionStorage.setItem('myItem', 'Hello World');


// GET item
const item = sessionStorage.getItem('myItem');
console.log(item);


// REMOVE item
sessionStorage.removeItem('myItem');


// CLEAR entire session storage
sessionStorage.clear();
