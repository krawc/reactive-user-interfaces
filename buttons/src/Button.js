import React, { Component } from 'react';
import './Button.css';


class Button extends Component {

  render() {
    let classes = 'Button ' + this.props.isActive;
    return (
      <button className={classes} label={this.props.buttonLabel} onClick={this.props.onClick}>{this.props.buttonText}</button>
    );
  }
}

export default Button;
