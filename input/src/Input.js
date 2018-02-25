import React, { Component } from 'react';

class Input extends Component {

  render() {
      return (
        <label for="thisInput">Label</label>
          <Input type={this.props.type} value={this.props.value} onChange={this.props.onChange}/>
      );
    }
  }

export default Input;
