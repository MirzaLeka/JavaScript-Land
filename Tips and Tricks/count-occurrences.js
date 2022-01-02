// Count occurrences in array

const letters = ['A', 'B', 'C', 'A', 'B', 'B', 'C', 'D', 'A', 'A'];

const collection = {};

letters.forEach(letter => {

  if (collection[letter]) {
    collection[letter]++;
  } else {
    collection[letter] = 1;
  }

});

console.log(collection);

/*
{
  "A": 4,
  "B": 3,
  "C": 2,
  "D": 1
} 
*/

// Alternatively

letters.map(letter => collection[letter] ? collection[letter]++ : collection[letter] = 1);

console.log(collection);
