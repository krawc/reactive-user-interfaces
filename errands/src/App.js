import React, { Component } from 'react';
import logo from './logo.svg';
import SingleContact from './SingleContact.js';
import Search from './Search.js';
import CategoryLink from './CategoryLink.js';
import ContactList from './ContactList.js';
import AddCategoryLink from './AddCategoryLink.js';
import AddCategory from './AddCategory.js';
import AddContact from './AddContact.js';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Settings from './Settings.js';
import './App.css';
import './ion/css/ionicons.min.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


/*

category {
  id,
  name,
  icon,
  color
}

single contact {
  id,
  name,
  number,
  address,
  category
}

pages:

- category view 1
- add a Category 2
- category contact list 3
- add contact 5
- single contact 4

*/

class App extends Component {

  constructor(props) {

    super(props);

    this.onAddCategory = this.onAddCategory.bind(this);
    this.onAddContact = this.onAddContact.bind(this);
    this.onFontChange = this.onFontChange.bind(this);

    this.state = {
      categories: [
        {category_name: 'Delivery', slug: 'delivery', icon: 'ion-cube', color: '#cddc39'},
        {category_name: 'Bank', slug: 'bank', icon: 'ion-stats-bars', color: '#673ab7'},
        {category_name: 'Doctor', slug: 'doctor', icon: 'ion-medkit', color: '#9c27b0'}
      ],
      footerLinks: [
        {footerLink_name: 'Categories', slug: 'home-categories', icon: 'ion-ios-albums-outline', route: '/'},
        {footerLink_name: 'List', slug: 'locations', icon: 'ion-ios-list-outline', route: '/List/'},
        {footerLink_name: 'Add Contact', slug: 'add', icon: 'ion-ios-plus-outline', route: '/add/'},
        {footerLink_name: 'Search', slug: 'search', icon: 'ion-ios-search', route: '/search/'},
        {footerLink_name: 'Settings', slug: 'settings', icon: 'ion-ios-gear-outline', route: '/settings/'}
      ],
      contacts: [
        {contact_name: '快递1', category_name: 'delivery', phone:'13162377235', location:'上海', email: 'here@example.com'},
        {contact_name: '快递2', category_name: 'delivery', phone:'13162377235', location:'北京', email: 'here@example.com'},
        {contact_name: '快递3', category_name: 'delivery', phone:'13162377235', location:'成都', email: 'here@example.com'},
        {contact_name: 'Ana', category_name: 'doctor', phone:'13162377235', location:'Jinqiao', email: 'here@example.com'},
        {contact_name: 'Mr Zhang', category_name: 'bank', phone:'13162377235', location:'Shanghai', email: 'here@example.com'},
        {contact_name: 'BA', category_name: '', phone:'13162377235', location:'London', email: 'here@example.com'},
        {contact_name: '快递4', category_name: 'delivery', phone:'13162377235', location:'LA', email: 'here@example.com'},
        {contact_name: '饿了么', category_name: 'delivery', phone:'13162377235', location:'NYC', email: 'here@example.com'},
        {contact_name: '鞋子', category_name: 'delivery', phone:'13162377235', location:'Tokyo', email: 'here@example.com'},
        {contact_name: 'Dr Scott', category_name: 'doctor', phone:'13162377235', location:'Warsaw', email: 'here@example.com'},
        {contact_name: 'Wang Peng', category_name: 'bank', phone:'13162377235', location:'Budapest', email: 'here@example.com'},
        {contact_name: 'Paris Hilton', category_name: '', phone:'13162377235', location:'Paris', email: 'here@example.com'}
      ],
      classes: 'small',
    }
  }

  onAddCategory(newelement) {
    var categories = this.state.categories.slice();
    categories.push(newelement);
    this.setState({ categories: categories });
  }

  onAddContact(newelement) {
    var contacts = this.state.contacts.slice();
    contacts.push(newelement);
    this.setState({ contacts: contacts });
  }

  onFontChange(title) {
    this.setState({
      classes: title
    });
  }


  render() {

    const categories = this.state.categories.map((category, i) => {
      return (
        <CategoryLink  key={i} category_name={category.category_name} icon={category.icon} color={category.color}/>
      );
    });

    const classes = 'App ' + this.state.classes;

    return (
      <div className={classes}>
        <Header/>
        <BrowserRouter>
        <Switch location={this.props.location}>
          <Route key='Home' exact path='/' render={(props) => (
            <Home
              categories={this.state.categories}
              footerLinks={this.state.footerLinks}
              contacts={this.state.contacts}
              activeCat={this.state.activeCat}
            {...props}/>
          )}/>
          <Route path='/addCategory' render={(props) => (
            <AddCategory
             onSubmit={this.onAddCategory}
             footerLinks={this.state.footerLinks}
            {...props}/>
          )}/>
          <Route path='/List' render={(props) => (
            <ContactList
            contacts={this.state.contacts}
            footerLinks={this.state.footerLinks}
            {...props}/>
          )}/>
          <Route path='/add' render={(props) => (
            <AddContact
            categories={this.state.categories}
            contacts={this.state.contacts}
            footerLinks={this.state.footerLinks}
            onSubmit={this.onAddContact}
            {...props}/>
          )}/>
          <Route path='/Search' render={(props) => (
            <Search
            contacts={this.state.contacts}
            footerLinks={this.state.footerLinks}
            {...props}/>
          )}/>
          <Route path='/settings' render={(props) => (
            <Settings
            onFontChange={this.onFontChange}
            footerLinks={this.state.footerLinks}
            {...props}/>
          )}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
