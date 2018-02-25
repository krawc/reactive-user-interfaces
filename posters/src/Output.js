import React, { Component } from 'react';
import './App.css';

class Output extends Component {

  render() {
    const classes = 'Output ' + this.props.className
    return (
      <div className={classes}>
        <span>{this.props.content}</span>
      </div>
    );
  }
}

export default Output;
