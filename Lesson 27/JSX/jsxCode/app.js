
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


const greeting = <h1>Hello from React</h1>;

// what we render, where we want to render it to
ReactDOM.render(greeting, document.querySelector('#app'));
