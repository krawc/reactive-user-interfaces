import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Project from './Project.js';
import img1 from './gesamt_thumb.png';
import img2 from './bauhaus.jpg';
import PageTransition from 'react-router-page-transition';



class App extends Component {

  render() {


    const slidesGesamt =  [
                              {
                                title: 'Gesamt Perspektive',
                                content: 'a tribute to Laszlo Moholy-Nagy, a Bauhaus master',
                                image: img1,
                                layout: 'textLeft',
                                colors: 'whiteOnBlack'
                              },
                              {
                                title: 'a word on Bauhaus:',
                                content: 'The ultimate goal of all art is the building! The ornamentation of the building was once the main purpose of the visual arts, and they were considered indispensable parts of the great building. Today, they exist in complacent isolation, from which they can only be salvaged by the purposeful and cooperative endeavours of all artisans. Architects, painters and sculptors must learn a new way of seeing and understanding the composite character of the building, both as a totality and in terms of its parts. Their work will then re-imbue itself with the spirit of architecture, which it lost in salon art.',
                                image: img2,
                                layout: 'textRight',
                                colors: 'blackOnWhite'
                              }
                          ];


    return (
      <BrowserRouter>
      <PageTransition>
      <Switch location={this.props.location}>
        <Route key='Home' exact path='/' component={Home}/>
        <Route key='Gesamt' path='/project/gesamt' render={(props) => (
          <Project
            slides={slidesGesamt}
          {...props}/>
        )}/>
      </Switch>
      </PageTransition>
      </BrowserRouter>
    );
  }
}

export default App;
