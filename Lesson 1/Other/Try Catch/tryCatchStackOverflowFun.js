
const calculate = (a, b) => {
  try {
    if ( b === 0 ) {
      throw `Divide by zero`;  
    }
    console.log(`Result is ${a / b}`);
  } catch (e) {
    window.location.href =  `http://stackoverflow.com/search?q=[js] ${e}`;
  }
}
