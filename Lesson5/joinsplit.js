
// SPLIT - split a single string into array of strings

    // Syntax string.split("delimiter = sequence of characters that splits each indivual token: , |, -, space"); 

let str = "100,90,32,7,81";

let numbers = str.split(","); // split // create new item after every ,

// console.log(numbers); // outputs: [ '100', '90', '32', '7', '81' ]

// exmaple 2:

let sentence = "well, a guy who dresses up like a bat clearly has issues.";

let words = sentence.split(" ").sort(); // we can split this sentence into array after every space and Sort right away

// console.log(words);

// example 3:

let splitedSentence = sentence.split(" bat "); // what this will do is add two elements into an array. 
// first element will be words before word " bat " and second, words after " bat ". 
// So " bat " serves as a spliting point will not appear in array.

// console.log(splitedSentence);

// example 4: 

let chars = sentence.split(""); // because this is an empty string, we'll split sentence into an array on each character
// so what we'll get is a an array of characters, where each char is item in array

// console.log(chars);


// JOIN - joins array into a string

// example 1:

let hypenated = words.join("-"); // joins all elements in a word array with a hypen in betwen each element

// console.log(hypenated);

// example 2:

let oneWord = words.join(""); // just like empty string ("") split eachs character into array element, with join method, 
// it combines every character into one word

// console.log(oneWord);


// example of split and join

let bond = "The name is Bond, James Bond!";

let splitted = bond.split(" ");

console.log(splitted);

let joined = splitted.join(" ");

console.log(joined);




