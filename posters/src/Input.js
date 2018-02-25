import React, { Component } from 'react';
import './App.css';

class Input extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }


  render() {
    return (
      <div className="Input">
        <label for={this.props.iD}>{this.props.name}</label>
        <input onChange={this.onChange} id={this.props.iD} placeholder={this.props.placeholder}/>
      </div>
    );
  }
}

export default Input;
