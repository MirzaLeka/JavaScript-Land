
// We use closures to hide our code as we would in java with private variables and functions

const a = (() => {

  let counter = 0;
  
  return () => {
  
    counter++;
    console.log(counter);
  
  };
  
})();
  
a();
  
const div = document.createElement('div');
div.style.height = '100px';
div.style.width = '100px';
div.style.backgroundColor = 'red';
div.style.cursor = 'pointer';
document.body.append(div);
  
div.addEventListener('click', a);

// this way no one can access counter variable and changing it
