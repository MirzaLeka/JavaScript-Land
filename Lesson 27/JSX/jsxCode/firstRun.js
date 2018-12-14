
// start live server: live-server (path)

// This is JSX
// var template = <p>Hello World</p>;

// Browser can't read JSX without babel.
// What babel does is transform es6, react code into vanilla JS code.

// Now let's see what's going on behind the scenes when we create a jsx statement

// This will be the output of babel, so code below is a code our browser can read with React and ReactDOM scripts we added
const template = React.createElement(
  'p', // html tag. Up above we have <p> tag
  null, // this is for attributes. If we had id, className, style and so on, here we'd see an object wth that id, class etc.
  'Hello World' // text context we wrote between <p> tags
);

// Rendering JSX to the DOM with ReactDOM

// template = JSX we want to render (what will you render)
// querySelector = DOM element where we want to render our JSX
ReactDOM.render(template, document.querySelector('#app'));
