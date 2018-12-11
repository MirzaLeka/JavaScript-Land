 
 // MAP - returns new array based on the values of original array

    // example 1: one parameter

    let existingArray = ["Batman", "Superman", "Spiderman"];

    let newArray = existingArray.map((value) => {
        return value + "!"; // newArray will be equal to return result of the existingArray
    })

    // newArray will be the same, but with ! inside every string

    console.log(newArray);

    // example 2: two parameters

    let originalArr = ["Ironman", "Black Panther", "Captain America"];

    let newArr = originalArr.map((value, index) => index + ": " + value);

    console.log(newArr); // output: [ '0: Ironman', '1: Black Panther', '2: Captain America' ]

    // example 3: three parameters, array parameter = the actual array that is calling a map function

    let food = ["Fish", "Potatoes", "salad"];

    let lunch = food.map((value, index, array) => {
        console.log(array); // prints food array once for each element
        console.log(value);
    } );

    // example 4: fourth parameter - object (thisArg) - used when we have an oject inside map method

    let people = ["Sinan", "Ermin", "Amar"];

    let newPeople = people.map(function (value, index, array) {
        return `${index}: ${value}, is gamer: ${this.gamer}` // returns an object as well
    }, {
        gamer: true
    });

    console.log(newPeople);

    // example 5: Calculations

    let nums = [1,2,3,4,5];

    let doubled = nums.map(num => num * 2); // returns value from the array multiplied by 2

    console.log(doubled);

    // example 6: Return array of strings

    let stringedArr = nums.map(item => item + "");

    console.log(stringedArr);


// example 7: return key from all objects and store in an array

const humans = [
  {
    name: 'Mirza',
    age: 24
  },
  {
    name: 'Ermin',
    age: 23
  },
  {
    name: 'Amar',
    age: 25
  }
];

const names = humans.map(human => human.name);

console.log(names);
