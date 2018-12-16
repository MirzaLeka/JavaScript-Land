
// Components

// Components are chunks of resuable code. We create a component, like Navbar for instance and then we can use that component everywhere in our project.

// React Components are nothing but ES6 class which extends React.Component

// React Components start with Capital letter. The reason we are doing that is to help React tell a difference between Component and HTML element.
// For example we can create h1 HTML element. If we create component with the name h1, we can't clearly tell the difference.
// For that reason component names start with capital letter, in this example, H1.

// Component example
// We create class ComponentName and extend React.component
// Every React component must have render function
// This function returns JSX and that's where we write our code we want to display when this component is called

class FirstComponent extends React.Component{
  render() {
    return <div>My First Component</div>;
  }
};

// To render a component we use the good old ReactDOM and throw in Component name, followed by document.querySelector where we want component to render

// Since we can render html within ReactDOM.render like, ReactDOM.render(<p></p>, ...),  we can wrap our component within JSX variable and achieve the same we did before.

const template = (
    <div>
      <FirstComponent /> {/* This is how you call a component */}
    </div>
);

ReactDOM.render(template, document.querySelector('#first'));

// But what we can also do is add Component within ReactDOM right away and wrap it around html tag:
// We can wrap component like this: <Component /> or this <Component></Component>. These are the same.

// With this we don't need to create a variable and asign to to some JSX value

ReactDOM.render(<FirstComponent />, document.querySelector('#second'));


// Rendering multiple components

const user = {
    name: 'Mirza',
    age: 24,
    hobbies: ['javascript', 'nodejs', 'reactjs']
  };

class User extends React.Component{
  render() {
      // We can create a object variable, asign some styles to it and apply it to the JSX we are returning
    const pStyle = {
       color: 'blue',
       borderBottom: '2px solid #222',
       width: '250px',
       textAlign: 'center'
    };
    return (
    <div>
        <p style={pStyle}>Name: {user.name}</p>
        <p style={pStyle}>Age: {user.age}</p>
        <ol>Hobbies:
            {user.hobbies.map((hobby, counter) => <li key={counter}>{hobby}</li>)}   
        </ol>
    </div>  
    );
  }
};

// To render multiple coponents at the same time, we can wrap them with div tag
ReactDOM.render(<div><FirstComponent /> <User /></div>, document.querySelector('#third'));


// Finally we can Nest Components

// Multiple components can be nested within a single component and then we can render that main component to the dom

class Main extends React.Component{
    render() {
        return (
            <div>
               <FirstComponent />
               <User />
               <FirstComponent />
               <FirstComponent />  { /* Notice that we can render the same component multiple times */ }
             </div>
        );
    }
}

ReactDOM.render(<Main />, document.querySelector('#final'));
