import React from 'react';
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      deadline : 'December 25, 2017'
    }
  }
  render(){
    return(
      <div className="App">
        <div className="App-title">CountDown to {this.state.deadline} </div>
        <div>
          <div className = "Clock-days">14 days</div>
          <div className = "Clock-hours" >30 hours</div>
          <div className = "Clock-minutes" >15 minutes</div>
          <div className = "Clock-seconds">20 seconds</div>
        </div>
        <div>
          <input placeholder = "New Date"></input>
          <button>Submit</button>
        </div>

      </div>);
  }
}

export default App;
