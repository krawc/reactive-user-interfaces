import React, { Component } from 'react';
import './css/Header.css';
import { Redirect, BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ReactSwipe from 'react-swipe';


class Header extends Component {

  render() {
    return (
      <div className="Header">
        <h3 className="Header-title">Errands</h3>
      </div>
    );
  }
}

export default Header;
