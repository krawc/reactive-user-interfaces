import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const before = ['Button 1', 'Button 2', 'Button 3'];
    const buttons = before.map(function(label){
      return <button label={label}>{label}</button>
    });
    return (
      <div className="container">{buttons}</div>
    );
  }
}

export default App;
