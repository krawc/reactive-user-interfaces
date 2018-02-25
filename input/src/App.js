import React, { Component } from 'react';
import './App.css';
import Input from './Input.js';


class App extends Component {

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      text: ''
    }
  }

  onChange(e){
    this.setState({
      text: e.target.value
    });
    console.log(this.state.text);
  }

  render() {
    return (
      <div className="App">
        <Input type="text" onChange={this.onChange}/>
        <Input type="text" onChange={this.onChange}/>
        <Input type="text" onChange={this.onChange}/>
      </div>
    );
  }
}

export default App;
