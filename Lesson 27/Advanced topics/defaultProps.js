import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// we can setup Default value for prop in case if it's not defined.
// Once we do define prop, we'll override the default one.

class MyComponent extends Component{
    render() {
       return (
        <div>
           <SecondComp />
        </div> 
       );
    }
}

const SecondComp = (props) =>{
    return <h1>{props.title}</h1>
}

// after we define a component we can add a default props which is an object
SecondComp.defaultProps = {
    title: 'Hello World!'
};

// so if we don't define the prop title React will look for default prop and there it is

ReactDOM.render(<MyComponent />, document.querySelector('someSelector'));
