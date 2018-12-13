
// this is the file where we'll write JSX code and we'll use babel to compile it into regular JS
// To compile, open terminal and type:
// babel jsxCode/app.js --out-file=compiledCode/app.js --presets=env,react --watch

// we start with babel, followed by input folder / fileName.js
// then we specify output folder / fileName.js => This file will be created/overwritten
// then we used presets for react and env (es6,7,8)
// then we can also add watch to watch for changes and add things every time we hit Save

// while that is running we can use another terminal to run live-server
// type: live-server followed by path

// I started both terminal for live-server & babel in the JSX folder so I can just type this the following:
// babel jsxCode/app.js --out-file=compiledCode/app.js --presets=env,react --watch // This must Come First
// live-server

// With that out of the way, let's kick things off by writing JSX code and rendering it to the DOM

// rendering multiple elements
const greeting = (
<div>
    <h1>Hello from React</h1>
    <p>This is some info</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
);
// adjacent jsx elements must be wrapped in an enclosing tag, meaning we need to enclose multiple elements within <div> tag
// we also added parentheses to make code clearer


// Variables

// In JSX when writting Javascript expressions (variables, functions) we need to add {} (curly brackets) around those expresions

const usersName = 'Mirza';
const usersAge = 24;
const usersLocation = 'Sarajevo';


const aboutMe = (
  <div>
  <h1>{usersName.toUpperCase()}</h1>
     <p>Age: {usersAge}</p>
     <p>Location: {usersLocation + ', Bosnia and Herzegovina'}</p>
     <p>Template String: {`${usersLocation}, Bosnia and Herzegovina`}</p>
  </div>
);


// Rendering an object


// Objects are not valid as a React child, thus we can't just type in name of the object between curly brackets, like this {object}
// But what we can do is call object.property


// Conditions and Logical operators

// In JSX we can write Javascript expressions within curly brackets, but same is not true for conditions.
// To use conditions (Statements) in React code we must declare a function that returns certain value after condition was met.

// Alternative to if / else statement would be a Ternary operator, which is works like JS expression and can be written within curly brackets.
// Ternary operator example: 5 > 1 ? 'Hello' : 'World'; => if 5 > 1 is true, print 'Hello', else print 'World'


// Important Note: If condition resolves to undefined, null, true or false, it will not appear in JSX. 
// Not just javascript expression, but whole tag, like <h1> for example, with a value of null, undefined or boolean will not appear in HTML.

// How to handle booleans?
// So we know that we can't write booleans within JSX, but how do we handle it then?

// In Javascript whenever we have two values separated by && operator, if first value resolves to truthy, Javascript will print the Second value
// Example: console.log(5 > 1 && 'some String'); // output: 'some String';
// For false, it would be the opposite, JS would print the First value
// Example: console.log(1 > 5 && 'some String') // output: false

// However when working with || operator we would get the opposite results


// Nesting JSX
// We know that we can write javascript expression within our JSX inside curly brackets, like this: <h1>{some JS}</h1>
// but we can also nest expressions by writing JSX within curly brackets:
// <h1>{<p>{some JS}<p>}</h1>

const user = {
  name: 'Mirza',
  age: 24,
  location: 'Sarajevo'
};

function getLocation(location) {
  if (location) {
    return <h3>Location: {location}</h3>;
  }
  // we don't need else. If location is undefined, that won't print in JSX anyway
}

const newMe = (
  <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>  {/* If user.name property exists, return user.name, else return 'Anonymous*/}
      {(user.age && user.age >= 18) && <h2>Age: {user.age}</h2>}  {/* if user.age exists and it's >= 18 then value will be truthy and we would create <h2> tag with value of Age: user.age*/}
      {getLocation(user.location)}  {/* We are callling a function and passing user.location as argument. This function will return JSX and users location*/}
  </div>
);

{/* This is a comment in JSX */}


// what we render, where we want to render it to
ReactDOM.render(newMe, document.querySelector('#app'));
