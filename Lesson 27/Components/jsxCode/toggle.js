
const details = ['Eat lunch', 'Workout', 'Take shower', 'Get some sleep'];

class Toggle extends React.Component{
  constructor(props) {
    super(props);

    this.toggleDetails = this.toggleDetails.bind(this);

    this.state = {
        toggleSwitch: false
    }

  }


  toggleDetails() {
    
    this.setState((prevstate) => {
      return {
        toggleSwitch: !prevstate.toggleSwitch   // the opposite of previous state
      }
    });

  }

  render() {
    return(
        <div> 
          <h3>Click on the button below to see the details</h3>
          <button onClick={this.toggleDetails}>{this.state.toggleSwitch ? 'Show' : 'Hide'} details</button>  
        
            {this.state.toggleSwitch ? <ul> { details.map((detail, counter) => <li key={counter}>{detail}</li>) } </ul> : false }

        </div>
    )
  }
}

ReactDOM.render(<Toggle />, document.querySelector('#app'));
