import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){

    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.addContact = this.addContact.bind(this);

    this.state = {
      contacts: [
        {contact_name: '快递1', email: 'here@example.com'},
        {contact_name: '快递2', email: 'here@example.com'},
        {contact_name: '快递3', email: 'here@example.com'},
        {contact_name: 'Ana', email: 'here@example.com'},
        {contact_name: 'Mr Zhang', email: 'here@example.com'},
      ],
    };
  }

  onSubmit(e){
    e.preventDefault();
    this.addContact(e.target.contact_name.value, e.target.email.value);
  }

  addContact(name, email) {

    let copy = this.state.contacts.slice();

    copy.push({
      contact_name: name,
      email: email
    });

    this.setState({
      contacts: copy
    });

  }

  render() {

    const list = this.state.contacts.map(p => (
        <p className="contact"><span className="contact_name">{p.contact_name}</span><span className="email">{p.email}</span></p>
    ));
    return (
      <div className="App">
        <div className="contactsList">
          {list}
        </div>
        <form className="addContact" onSubmit={this.onSubmit}>
          <input className="contactInput" id="contact_name" name="contact_name" placeholder="Insert name..."></input>
          <input className="emailInput" type="email" id="email" name="email" placeholder="Insert email..."></input>
          <button type="submit">SAVE</button>
        </form>
      </div>
    );
  }
}

export default App;
