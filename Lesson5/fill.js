
// FILL - fills elements in an array with a value
    
    // we can set the starting and the ending index
    let letters = ["A", "B", "C", "D", "E", "F", "G"];
    // letters.fill(20, 2, 5); // it replaces elements from index 2 to 5 (without 5) with 20

    console.log(letters);

    // if we don't set the last index, we'll fill the rest of the array with the value we want to fill array with
    // letters.fill(20, 2);

    console.log(letters);

    // if we just write fill and value, without any indexes, we'll fill entire array (from start to finish) with the same value
    letters.fill(47);

    console.log(letters);

    // Like sort(), fill() does not require us to create a new array (variable). Instead it does all operations on existing array.