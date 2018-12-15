
const app = {
  title: 'My React App',
  subtitle: 'Pure JSX ahead!',
  options: []
};


const onFormSubmit = (e) => {
  
  // first we use event to preventDefault behavior and reload the page
  e.preventDefault();

  // e.target points to form we created
  // we can use target.elements to select form elements using their names
  // our form has an input with a name formInp, thus we are selecting it and storing it's value in variable option
  const option = e.target.elements.formInp.value;

  if (option) {
    // pushing new option to array inside app object
    app.options.push(option);
    e.target.elements.formInp.value = '';
    reRenderForm();
  }

  // This function does not return anything, so return is equal to undefined, this we are not referencing function
};


// removing all elements from array
const removeAll = () => {
  app.options = [];
  reRenderForm();
};


// Arrays are supported by JSX just like Strings and Numbers
// { [1, 2, 3, 4, 5] }
// When outputed to html example up above would look like this: 12345, no spacing.

// We can also have array of JSX, for example:
/* 
{
[<p key="1">something</p>, <p key="2">ABC</p>, <p key="3"> </p>] // and then use map to print these values
}
// Notice that we are using key property. In JSX we need to give arrays a unique identifier, so we can set this key to a random, unique value
*/


// We are creating a random decision
const makeADecision = () => {

  // Math.random => random number from 0 to 0.99999. It never reaches 1.
  // app.options.length => length of our array
  // Math.floor => floors the decimal value down to an integer number. So if it's 3.99, floor will turn it into 3.

  const randomNumber = Math.floor(Math.random() * app.options.length);

  // Now we need to pick random index from an array
  const decision = app.options[randomNumber]; // because we are using floor, random value will always be less than array length, thus array won't be out of bounds

  alert(`You should ${decision}`);
  // As we add new options, we'll be able to use makeADecision function to alert randomly selected option (decision)
};


/*    CODE BREAK       */


const reRenderForm = () => {

  const template = (
   <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
      <button disabled={app.options.length === 0} onClick={makeADecision}>What should I do next?</button> { /* if our array has a length of zero, button will be disabled */ }
      <button onClick={removeAll}>Remove all</button>

      <ol>{
        app.options.map((option, counter) => <li key={counter}>{option}</li> )
      }</ol>

      <form onSubmit={onFormSubmit}>  {/* We are not calling function, we are just referencing it*/}
          <input type='text' name='formInp' placeholder='Insert option'/>
          <button>Add option</button>
      </form>
   </div>
  );
    
  ReactDOM.render(template, document.querySelector('#app'));

};

reRenderForm();
