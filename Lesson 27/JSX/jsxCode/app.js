
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
// live-server
// babel jsxCode/app.js --out-file=compiledCode/app.js --presets=env,react --watch

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

const user = {
  name: 'Mirza',
  age: 24,
  location: 'Sarajevo'
};

const newMe = (
  <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h3>{user.location}</h3>
  </div>
);

// what we render, where we want to render it to
ReactDOM.render(newMe, document.querySelector('#app'));
