
// Class components = components with state
// Functional components = stateless components

// To declare a statless component we create a function and return some jsx

const Stateless = () => {
    return (
        <div>Hello World!</div>
    )
}

// Notice that we don't have return() method defined within our Staeless function (component)

// Stateless components render faster and they are easier to test


// Since stateless component does not include class, it does not provide this keyword either. So how do we access props then?
// We just pass pass props as an argunemt to the function and then call it whitout this keyword. In short, props is an object


const StateTwo = (props) => {
    return (
        <div> 
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}

ReactDOM.render(<StateTwo title={'Hello React'} subtitle='Javascript' />, document.querySelector('#app'));
