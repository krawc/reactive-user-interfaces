import React, { Component } from 'react';
import './App.css';
import { Redirect, BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ReactSwipe from 'react-swipe';


class Footer extends Component {

  render() {

    const footerLinks = this.props.footerLinks.map((link, i) => {
      let path = link.route;
      return (
        <div className="footerLink-wrap">
          <Link to={path} className="footerLink">
            <i className={link.icon}></i>
            <span className={link.slug}>{link.footerLink_name}</span>
          </Link>
        </div>
      );
    });

    return (
      <div className="Footer">
        <div className="footerLinks">
          {footerLinks}
        </div>
      </div>
    );
  }
}

export default Footer;
