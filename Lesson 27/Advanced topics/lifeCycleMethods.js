import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// With Lifecycle methods, we can then control what happens when each tiny section of your UI renders, updates, thinks about re-rendering
// and then disappears entirely.

// Like states, lifecycle methods are only available for class based Components

class MyComponent extends Component{
    render() {
       return <div>JSX</div> 
    }

    //  componentDidMount - executes when component gets rendered to the DOM
    componentDidMount() {
        // some code that will execute as soon as component is rendered
    }

    // componentDidUpdate - executes after component (state or prop) updates
    componentDidUpdate(prevProps, prevState)  {
        // some code that will execute every time component updates

        // we also have access to this.state and this.props for new props and state values, 
        // but we also have acess to previous props and previous state via arguments
    }

    // componentWillUnmount - executes before component gets removed
    componentWillUnmount() {
        // some code that will execute when given component disappears from the screen
    }

    // constructor() and render() are also lifecycle methods
}

ReactDOM.render(<MyComponent />, document.querySelector('someSelector'));

// More on these methods can be found on link below
// https://reactjs.org/docs/react-component.html
