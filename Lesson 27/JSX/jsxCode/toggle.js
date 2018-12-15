
// Creating a simple toggle details app using JSX

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;

  render();

};

const render = () => {

  const template = (
    <div>
        <h1>Creating a simple toggle details app using JSX!</h1>
        <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
        {visibility && <p>These are some details you can now see</p>}  {/* if first value is truthy, print second, else print false and false will be ignored */}
    </div>
  );

  ReactDOM.render(template, document.querySelector('#app'));

};

render();
