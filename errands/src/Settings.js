import React, { Component } from 'react';
import './css/Settings.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import SingleContact from './SingleContact.js';

class ContactList extends Component {

  constructor(props) {
    super(props);
    this.onFontChange = this.onFontChange.bind(this);
  }

  onFontChange(e) {
    e.preventDefault();
    this.props.onFontChange(e.target.value);
  }

  render() {
    return (
      <div className="Settings">
        <div className="allSettings">
          <h5 className="Settings-header">SET FONT SIZE:</h5>
          <input type="button" value="small" className="small" onClick={this.onFontChange}/>
          <input type="button" value="medium" className="medium" onClick={this.onFontChange}/>
          <input type="button" value="big" className="big" onClick={this.onFontChange}/>
        </div>
        <Footer footerLinks={this.props.footerLinks}/>
      </div>

    );
  }
}

export default ContactList;
