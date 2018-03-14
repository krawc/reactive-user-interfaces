import React, { Component } from 'react';
import './App.css';

class SingleContact extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      toggled: 'false'
    };
  }

  onClick() {
    if (this.state.toggled === 'false') {
      this.setState({ toggled: 'true' });
    } else {
      this.setState({ toggled: 'false' });
    }
  }


  render() {
    let phone = 'tel:' + this.props.theContact.phone;
    let classes = 'singleContact ' + this.state.toggled;
    return (
        <div className={classes}>
        <div className="singleContact-info" onClick={this.onClick}>
          <p className="singleContact-name">{this.props.theContact.contact_name}</p>
          <p className="singleContact-email">{this.props.theContact.email}</p>
          <p className="singleContact-location">{this.props.theContact.location}</p>
        </div>
        <a href={phone}><i className="ion-ios-telephone-outline"></i></a>
        </div>
    );
  }
}

export default SingleContact;
