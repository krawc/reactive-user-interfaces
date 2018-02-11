import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';
import Result from './Result.js';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      childrenData: [
          {childText: "First Button", childNumber: 1},
          {childText: "Second Button", childNumber: 2},
          {childText: "Third Button", childNumber: 3}
      ],
      current: 'None'
    }
    this.handleChildClick = this.handleChildClick.bind(this);
  }

  render() {
    var children = this.state.childrenData.map(function(childData,childIndex) {
        return <Button isActive={this.state.current == childData.childText ? 'active' : 'inactive'} onClick={this.handleChildClick.bind(null,childData)} buttonText={childData.childText}/>
    }.bind(this));
    var result = 'You have selected: ' + this.state.current;
      return (
        <div className="container">
        <div className="buttons">{children}</div>
        <div className="result"><Result displayResult={result}/></div>
        </div>
      );
    }

  handleChildClick(childData,event) {
     this.setState({
       current: childData.childText
     })
  }
}

export default App;
