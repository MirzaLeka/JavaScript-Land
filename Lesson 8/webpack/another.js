
const square = a => a * a; // example of named export

const sum = (a, b) => a + b; // another named export

const subtract = (a, b) => a - b; // we'll use subtract 4 defualt export and not named export 

const str = 'Math:'; // exporting variable

// export multiple
export { 
  str, square, sum, subtract as default // we are exporting subtract as default export
};  
// since we export so many items, ESLint suggest we make a line break and that's what we did

// export inline:
// export const something = () => ;

// module.exports.variable = () => ; // still works
