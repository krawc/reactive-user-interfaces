import React, { Component } from 'react';
import './css/AddCategoryLink.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class AddCategoryLink extends Component {

  render() {
    let path = '/addCategory';
    return (
      <div className="AddCategoryLink">
      <Link to={path}>
        <p className="Category-icon"><i className='ion-plus'></i></p>
      </Link>
      </div>
    );
  }
}

export default AddCategoryLink;
