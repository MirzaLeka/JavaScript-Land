
// ES 2019 brings two new trim() variations:
  // trimStart()
  // trimEnd()

  // Example 1: 

  const msg = '   Hello World   ';

  const start = msg.trimStart();

  console.log(start); // output: 'Hello World   '

  // trimStart() trims front spacing, while the back stays untouched.
  // trimEnd() works the opposite

  // Example 2:

  const end = msg.trimEnd();

  console.log(end); // output: '   Hello World' 
  // we trimmed the back spacing

  // We can still use the good old trim()

  const trimmed = msg.trim();

  console.log(trimmed); // output: 'Hello World'

  // Note this feature may not be avaiable in Node.js until publish release of ES2019 in June 2019
  