import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer.js';
import SingleContact from './SingleContact.js';

class ContactList extends Component {

  render() {

    let classes = 'ContactList';
    let contacts = this.props.contacts;
    let contactsOrdered = contacts.sort(function(a, b){
        if(a.contact_name < b.contact_name) return -1;
        if(a.contact_name > b.contact_name) return 1;
        return 0;
    })
    let allContacts = contactsOrdered.map((contact) => {
      return <SingleContact theContact={contact}/>;
    });
    return (
      <div className={classes}>
        <div className="contacts-list">{allContacts}</div>
        <Footer footerLinks={this.props.footerLinks}/>
      </div>

    );
  }
}

export default ContactList;
