
// if we only have one function to export it's always better to use default export

// with default export we first Must create a function and
// then, using export default syntax, export the function

// example:

// const divide = (a, b) => a / b;
// export default divide; // we are referencing single expression and this will work

// the best method is to not write a variable and just do it all in one line
export default (a, b) => a / b;
