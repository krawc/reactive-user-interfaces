import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SingleContact from './SingleContact.js';


class CategoryLink extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.slug);
  }

  render() {

    let path = '/category/' + this.props.category_name;
    let classes = 'Category ' + this.props.active;
    var allContacts = this.props.contactList.map((contact) => {
      return <SingleContact theContact={contact}/>;
    });
    return (
      <div className={classes} onClick={this.onClick}>
        <div className="CategoryLink" style={{background: this.props.color}}>
          <p className="Category-name">{this.props.category_name}</p>
          <p className="Category-icon"><i className={this.props.icon}></i></p>
        </div>
        <div className="contacts-list">{allContacts}</div>
      </div>
    );
  }
}

export default CategoryLink;
