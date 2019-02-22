
// We bind object to a function and referencing object using this keyword

const c1 = {
    x: 5,
    y: 10
};

const c2 = {
    x: 75,
    y: 235
};

// now we'll create a function that will print out xy coordinates for both objects without using an argument

function printCoordinates() {
    console.log(`${this.x}, ${this.y}`); // at the moment this won't point to c1 or c2, so we need to use bind
}

const c1_func = printCoordinates.bind(c1); // now this will refer to c1 inside printCoordinates() function
const c2_func = printCoordinates.bind(c2); // we do the same binding for 2nd function

// Again we bind object to a function and referencing object using this keyword

// now we call the functions we created above and that will trigger printCoordinates to log the coordinates

c1_func(); // output: 5, 10
c2_func(); // output: 75, 235

// if we would call printCoordinates() like below will get undefined for x and y, because this inside function refers to window
// and there is no window.x nor window.y, unless we manually create them (window.x = 100; window.y = 200)

// printCoordinates() // output: undefined undefined
