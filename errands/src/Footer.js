import React, { Component } from 'react';
import './css/Footer.css';
import { Redirect, BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ReactSwipe from 'react-swipe';


class Footer extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      active: ''
    };
  }

  onClick(e){
    //e.preventDefault();
    this.setState({ active: e.currentTarget.id });
    console.log(this.state.active);
  }

  render() {

    const footerLinks = this.props.footerLinks.map((link, i) => {
      let path = link.route;
      let id = 'footer-link-' + i;
      return (
        <div className="footerLink-wrap" key={i}>
          <Link to={path} className="footerLink" id={id} onClick={this.onClick}>
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
