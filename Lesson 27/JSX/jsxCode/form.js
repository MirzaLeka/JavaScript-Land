
const app = {
  title: 'My React App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};


const onFormSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted');

  const option = e.target.elements.formInp.value;

  if (option) {
    app.options.push(option);
    e.target.elements.formInp.value = '';
    console.log(app.options);
  }
};

const template = (
    <form onSubmit={onFormSubmit}>
       <input type='text' name='formInp' placeholder='Insert text'/>
       <button>Add option</button>
    </form>
);

ReactDOM.render(template, document.querySelector('#app'));
