
// Props are a React feature that allows us to dynamically pass data between Components

// For example we have a header that we want to use in all our pages, but header might have different title on different pages:
// So instead of making a component with a title home, then another with a title about, then another... we can use props to pass
// this dynamic data (title) into our components without creating dozens of similar looking components.

// Let's say we want to sum all of our components in the Main component. What we can do is, beyond listing components, is
// also create a series of props with values for this Page and pass them to their Components

class Main extends React.Component{
    render() {
        const title = 'Home Page';
        const options = ['Javascript', 'ReactJS', 'NodeJS'];

        return (
            <div>
               <Header title={title} subtitle='Props are AWSM!'/> 
               <Options options={options} />
               <Footer /> 
            </div>
        );
    }
}

// Prop name can be anything. If we console.log prop what we'll get is an object.


class Header extends React.Component{
  render() {
     return <div>
         <h1>{this.props.title}</h1>    {/* Here we are putting the value of prop title that we created in Main component */}
         <p>{this.props.subtitle}</p>   {/* We can apply the same logic for multipage applicaion */}
     </div>;
    }
}

// We can also return a Component like <Option /> below and pass props

class Options extends React.Component{
    render() {
        return (
            <div>
            Options array have {this.props.options.length} elements:
            {
              this.props.options.map((option, counter) => <Option key={counter} text={(counter+1) + '. ' +  option}/> )
              // Here we passing key for an array (this.props.options) as a prop and also pass option as Component title
            }
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


class Footer extends React.Component{
    render() {
       return <div>Footer</div>;
      }
  }


ReactDOM.render(<Main />, document.querySelector('#app'));
