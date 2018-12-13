
let count = 0;

const addOne = () => {
  count++;
  renderAppCount();
};

const removeOne = () => {
  count--;
  renderAppCount();
};

const reset = () => {
  count = 0;
  renderAppCount();
};

// JSX code does not bind events, so if we change value of count, variable value will go up or down, but JSX will stay the same.
// For that reason we use States, but we are not there yet. So what we can do is create renderAppCount function which will re-render JSX every time we call it.

// How this works?
// Well JSX loads buttons to the web before we even get a chance to press a button. That being said, clicking button afterwards will not trigger any event, because JSX is set.
// What we do is put all of our JSX in our function and we call this function every time we click a button, causing JSX to re-render itself.

const renderAppCount = () => {

  const template = (
    <div>
        <h1>Count: {count}</h1>  
        <button onClick={addOne} className="button">+ 1</button>
        <button onClick={removeOne} className="button">- 1</button>
        <button onClick={reset} className="button">Reset</button> 
    </div>
  );
      
      
  ReactDOM.render(template, document.querySelector('#app'));

};

renderAppCount();

// Although it looks like whole page is being rendered when button is clicked, what was really rendered is only the text that changed.
// This is the power of ReactDOM. It re-renders only that which changed, unlike regular JS which would re-render whole tag or series of tags.
