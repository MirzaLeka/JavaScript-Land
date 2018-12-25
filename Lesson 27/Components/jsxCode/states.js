
class Counter extends React.Component{

  constructor(props) {
    super(props);

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    // just like with everything else, in Constructor we define the initial value. Same works for state where we set count to 0
    this.state = { 
        count: 0
    }
  }
 
  handleAddOne() {
    // sure we can set state manually by saying > this.state.counter += 1 <, but tricky part is rerendering DOM. 
    // For that reason we need to use setState method which returns an object:
    
    this.setState((prevState) => {
      // prevState was the state before the change. We can call prevState.count (object) to update our state  
      return {
        count: prevState.count + 1 
      };
    });

    // if we had more properties in our this.state object and updated only count, that update would Not effect other properties. Only count would be changed.

  }

  handleMinusOne() {
    // let's apply the same logic from handleAddOne below

    this.setState((prevState) => {
        return {
            count: prevState.count - 1
        }
    });

  }

  handleReset() {
    
    this.setState(() => {
        return {
            count: 0 // We don't need previous state here, because whatever it was, we're just gonna set count to zero
        }
    })

  }
    
  render() {
    return (
        <div>
          <h1>Count: {this.state.count}</h1> {/* We are calling our this.state.count here */}
          <button onClick={this.handleAddOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
    );
  }
}

ReactDOM.render(<Counter />, document.querySelector('#app'));
