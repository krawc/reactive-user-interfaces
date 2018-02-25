import React, { Component } from 'react';
import Input from './Input.js';
import Output from './Output.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);

    this.state = {
      title: 'Event Name',
      location: 'Location',
      time: 'Time',
      inputs: [
          {name: "Event name", iD: "eventName", placeholder: "This is the title of your event.", callback: this.onTitleChange},
          {name: "Location", iD: "location", placeholder: "This is the location of your event.", callback: this.onLocationChange},
          {name: "Time", iD: "time", placeholder: "This is the time of your event.", callback: this.onTimeChange},
      ],
      outputs: [
          {display: 'title', className: "title"},
          {display: 'location', className: "info"},
          {display: 'time', className: "info"},
      ]
    }
  }

  onTitleChange(title) {
    this.setState({
      title: title
    });
  }

  onLocationChange(location) {
    this.setState({
      location: location
    });
  }

  onTimeChange(time) {
    this.setState({
      time: time
    });
  }

  render() {
    var inputs = this.state.inputs.map(function(inputField) {
        return <Input name={inputField.name} iD={inputField.iD} onChange={inputField.callback} placeholder={inputField.name}/>
    }.bind(this));
    var outputs = this.state.outputs.map(function(outputField) {
        return <Output content={this['state'][outputField.display]} className={outputField.className}/>
    }.bind(this));
    return (
      <div className="App">
        <div className="inputs">
          {inputs}
        </div>
        <div className="outputs">
          {outputs}
        </div>
      </div>
    );
  }
}

export default App;
