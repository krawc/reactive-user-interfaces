import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';
import Result from './Result.js';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
    this.buttonWasClicked = this.buttonWasClicked.bind(this);
  }

  buttonWasClicked(){
    this.setState({
      count: this.state.count + 1//increment the number on every click of the button
    })
  }

  render() {
    return (
      <div className="container">
        <Button buttonLabel="CLICK" onClick={this.buttonWasClicked}/>
        <Result className='counter' displayResult={this.state.count}/>
      </div>
    );
  }
}

export default App;
