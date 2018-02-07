import React, { Component } from 'react';

class Button extends Component {


  render() {
    return (
      <button className="Button" label={this.props.buttonLabel} onClick={this.props.onClick}>{this.props.buttonLabel}</button>
    );
  }
}

export default Button;
