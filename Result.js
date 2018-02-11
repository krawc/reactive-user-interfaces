import React, { Component } from 'react';

class Result extends Component {

  render() {
    return (
      <p className="Result">{this.props.displayResult}</p>
    );
  }
}

export default Result;
