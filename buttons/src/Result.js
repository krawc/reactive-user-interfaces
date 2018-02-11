import React, { Component } from 'react';
import './Result.css';

class Result extends Component {

  render() {
    return (
      <p className="Result">{this.props.displayResult}</p>
    );
  }
}

export default Result;
