import React, { Component } from 'react';
import './css/AddCategory.css';
import { Redirect, BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ReactSwipe from 'react-swipe';
import Footer from './Footer.js';


class AddCategory extends Component {


  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      icons1: ['ion-person', 'ion-help-circled', 'ion-wrench', 'ion-star', 'ion-medkit'],
      icons2: ['ion-card', 'ion-bag', 'ion-plane', 'ion-model-s', 'ion-minus-circled'],
      colors: ['#f8e249', '#00e396', '#ff4e8d', '#00c0ff', '#9a3dc6'],
      fireRedirect: false
    }
  }


  onSubmit(e) {
    e.preventDefault();

    const formData = {};
    var name = e.target.category_name.value;
    formData['category_name'] = name;
    formData['slug'] = name.replace(/\s+/g, '_').toLowerCase();
    formData['icon'] = e.target.icon.value;
    formData['color'] = e.target.color.value;

    this.props.onSubmit(formData);
    this.setState({ fireRedirect: true });
  }

  render() {

    const icons1 = this.state.icons1.map((icon, i) => {
      let choiceId = 'iconChoice' + i;
      return (
        <label><input ref="icon" type="radio" name="icon" value={icon}></input><i className={icon}></i></label>
      );
    });

    const icons2 = this.state.icons2.map((icon, i) => {
      return (
        <label><input ref="icon" type="radio" name="icon" value={icon}></input><i className={icon}></i></label>
      );
    });

    const colors = this.state.colors.map((color, i) => {
      return (
        <label><input ref="color" type="radio" name="color" value={color}></input><div style={{background: color}} className="colorIcon"></div></label>
      );
    });

    const { from } = this.props.location.state || '/';
    const { fireRedirect } = this.state;

    return (
      <div className="AddCategory">
        <div className="AddCategory-formWrapper">
        <form className="AddCategory-form" onSubmit={this.onSubmit}>
          <input ref="category_name" required type="text" placeholder="insert name..." name="category_name" className="AddCategory-name"></input>
          <div className="icon-picker-wrap">
            <ReactSwipe id="iconPicker" className="iconPicker carousel" swipeOptions={{continuous: true}}>
                <div className="carousel-slide">
                  {icons1}
                </div>
                <div className="carousel-slide">
                  {icons2}
                </div>
            </ReactSwipe>
          </div>
          <div className="color-picker">
            {colors}
          </div>
            <button className="addTheCategory" type="submit">ADD</button>
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

export default AddCategory;
