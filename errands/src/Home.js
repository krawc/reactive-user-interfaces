import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import CategoryLink from './CategoryLink.js';
import AddCategoryLink from './AddCategoryLink.js';
import Header from './Header.js';
import Footer from './Footer.js';



class Home extends Component {

  constructor(props) {
    super(props);
    this.onCatChange = this.onCatChange.bind(this);
    this.state = {
      activeCat: ''
    };
  }

  onCatChange(active) {
    this.setState({ activeCat: active });
  }

  render() {

    const categories = this.props.categories.map((category, i) => {

      let isActive = this.state.activeCat === category.slug ? 'active' : 'inactive';
      let contacts = this.props.contacts.filter(contact => {
        return contact.category_name.match(category.slug);
      });
      return (
        <CategoryLink contactList={contacts} active={isActive} onClick={this.onCatChange} category_name={category.category_name} slug={category.slug} icon={category.icon} color={category.color}/>
      );
    });

    return (
      <div className="Home">
        <div className="App-contents">
          <div className="categories">
            {categories}
            <AddCategoryLink/>
          </div>
        </div>
        <Footer footerLinks={this.props.footerLinks}/>
      </div>
    );
  }
}

export default Home;
