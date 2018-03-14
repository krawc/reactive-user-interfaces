import React, { Component } from 'react';
import './App.css';
import { Redirect, BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ReactSwipe from 'react-swipe';
import Footer from './Footer.js';


class AddContact extends Component {


  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      fireRedirect: false
    }
  }


  onSubmit(e) {
    e.preventDefault();

    const formData = {};
    formData['contact_name'] = e.target.contact_name.value;
    formData['category_name'] = e.target.category_name.value;
    formData['phone'] = e.target.phone.value;
    formData['email'] = e.target.email.value;
    formData['location'] = e.target.location.value;

    this.props.onSubmit(formData);
    this.setState({ fireRedirect: true });
  }

  render() {

    const { from } = this.props.location.state || '/';
    const { fireRedirect } = this.state;

    const cat_options = this.props.categories.map((cat, i) => {
      return (
        <option value={cat.slug}>{cat.category_name}</option>
      );
    });

    return (
      <div className="AddContact">
        <div className="AddContact-formWrapper">
        <form className="AddContact-form" onSubmit={this.onSubmit}>
          <h5 className="AddContact-title">ADD CONTACT</h5>
          <input ref="contact_name" type="text" placeholder="insert name..." name="contact_name" className="AddContact-name"></input>
          <input ref="phone" type="phone" placeholder="insert phone number..." name="phone" className="AddContact-phone"></input>
          <input ref="contact_name" type="text" placeholder="insert location..." name="location" className="AddContact-location"></input>
          <input ref="email" type="email" placeholder="insert email..." name="email" className="AddContact-email"></input>
          <select ref="category_name" placeholder="insert category name..." name="category_name" className="AddContact-category">
            <option value="" disabled selected>Select a category...</option>
            {cat_options}
          </select>

          <button className="addTheContact" type="submit">ADD</button>
        </form>
        {fireRedirect && (
          <Redirect to={from || '/'}/>
        )}
        </div>
        <Footer footerLinks={this.props.footerLinks}/>
      </div>
    );
  }
}

export default AddContact;
