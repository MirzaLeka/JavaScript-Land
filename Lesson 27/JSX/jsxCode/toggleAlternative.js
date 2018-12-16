
// Similar to previous toggle example, done in a different way

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;

  if (visibility) {
    return render('These are some details you can now see');
  } 

  return render(false);
};


const render = (details) => {

  const template = (
    <div>
        <h1>Creating a simple toggle details app using JSX!</h1>
        <button onClick={toggleVisibility}>Details</button>
        <p>{details}</p>
    </div>
  );

  ReactDOM.render(template, document.querySelector('#app'));

};

render();
