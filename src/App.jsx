import React from 'react';
import './App.css';
import Clock from './Clock'
import {Form ,Button, FormControl} from 'react-bootstrap';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      deadline : 'December 25, 2017',
      newDeadline : ''
    }
  }

  changeDeadline(e){
    e.preventDefault();
    this.setState({deadline : this.state.newDeadline})

  }
  render(){
    return(
      <div className="App">
        <div className="App-title">CountDown to {this.state.deadline} </div>
        <Clock deadline = {this.state.deadline}/>
        <Form inline= {true} onSubmit = {(e)=>this.changeDeadline(e)}>
          <FormControl className = "Deadline-input" placeholder = "New Date" onChange = {event => this.setState({ newDeadline : event.target.value })} />
          <Button type ="submit"> Submit </Button>
        </Form>

      </div> );
  }
}

export default App;
