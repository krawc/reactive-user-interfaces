import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer.js';
import SingleContact from './SingleContact.js';

class Search extends Component {

  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
    this.onTagClick = this.onTagClick.bind(this);
    this.onCancel = this.onCancel.bind(this);

    this.state = {
        search: '',
        active: 'inactive'
      };
    }

  onSearch(e) {
    e.preventDefault();
    this.setState({
      search: e.target.value,
      active: 'active'
    });
  }

  onTagClick(e) {
    e.preventDefault();
    this.setState({
      search: e.target.value,
      active: 'active'
    });
  }

  onCancel(e) {
    e.preventDefault();
    this.setState({
      search: '',
      active: 'inactive'
    });
  }

  render() {

    let classes = 'Search ' + this.state.active;
    let contacts = this.props.contacts;

    console.log(contacts);

    let contactsOrdered = contacts.sort(function(a, b){
        if(a.contact_name < b.contact_name) return -1;
        if(a.contact_name > b.contact_name) return 1;
        return 0;
    })

    if (this.state.search !== '') {
      contactsOrdered = contactsOrdered.filter(contact =>
        contact.contact_name.match(this.state.search) || contact.location.match(this.state.search)
      );
    }

    let allLocations = contactsOrdered.map((contact) => {
        return <input type="button" className="locationTag" value={contact.location} onClick={this.onTagClick}></input>;
    });

    let allContacts = contactsOrdered.map((contact) => {
      if (this.state.search !== '') {
        return <SingleContact theContact={contact}/>;
      }
    });

    return (
      <div className={classes}>
        <div className="search-wrap">
        <input className='search' placeholder="search..." name='search' onChange={this.onSearch} value={this.state.search}></input>
        <div className="locationTags">
          <p>or pick a location:</p>
          <div className="tag-cont">{allLocations}</div>
        </div>
        <div className="contacts-list">{allContacts}</div>
        <div className="close" onClick={this.onCancel}><i className="ion-ios-close-empty"></i></div>
        </div>
        <Footer footerLinks={this.props.footerLinks}/>
      </div>
    );
  }
}

export default Search;
