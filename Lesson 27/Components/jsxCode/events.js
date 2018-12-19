
 
class Main extends React.Component{
    render() {
        const title = 'Home Page';
        const options = ['Javascript', 'ReactJS', 'NodeJS'];

        return (
            <div>
               <Navbar />
               <Header title={title} subtitle='Props are AWSM!'/> 
               <Action />
               <AddOption />
               <Options options={options} />
               <br/>
               <Footer /> 
            </div>
        );
    }
}


class Header extends React.Component{
  render() {
     return <div>
         <h1>{this.props.title}</h1>  
         <p>{this.props.subtitle}</p>   
     </div>;
    }
}


class Navbar extends React.Component{
    render() {
       const ulStyle = {
          background: '#111',
          color: '#FFF',
          width: '100%',
          margin: 0,
          height: '30px',
       };
        return (
       <div>
         <ul className='nav' style={ulStyle} >
              <li style={{color: 'gold'}} className='liClass'>Home</li>
              <li className='liClass'>About</li>
              <li className='liClass'>News</li>
         </ul>
        </div>
        )
    }
}


class Action extends React.Component{

    // since we are using class syntax we can create methods within the class that can be called using this
    handlePick() {
        alert('Picked!');
    }

    render() {
      return (
          <div>
              <button className='btn btn-primary' onClick={this.handlePick}>What should I do?</button>
          </div>
      );
    }
}


class Options extends React.Component{

    handleRemoveAll() {
        alert('Removing All!');
    }

    render() {
        return (
            <div>
            Options array have {this.props.options.length} elements:
            {
              this.props.options.map((option, counter) => <Option key={counter} text={(counter+1) + '. ' +  option}/> )
            
            }
            <button className='btn btn-danger' onClick={this.handleRemoveAll}>Remove All</button>
            </div>
        )
    }
}


class Option extends React.Component{
    render() {
        const pushed = {
          marginLeft: '50px'
        };
        return(
            <p style={pushed}>{this.props.text}</p>
        );
    }
}


class AddOption extends React.Component{

    formSubmit(e) {
        e.preventDefault();

        if (document.myForm.add.value.trim().length === 0) {
            return;
        }

        // Hint: document.formName.inputName.textValue.trimmed.length
        // alternative: e.target.elements.add.value 

        alert(document.myForm.add.value);
        document.myForm.add.value = '';
    }

    render() {
        return(
            <div>
                <form className='form-group' name='myForm' onSubmit={this.formSubmit}>
                    <input className='form-control' name='add' type='text' placeholder='insert anything!' autoComplete='off'/>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        );
    }
}


class Footer extends React.Component{
    render() {
       return <div>Footer</div>;
      }
  }


ReactDOM.render(<Main />, document.querySelector('#app'));

