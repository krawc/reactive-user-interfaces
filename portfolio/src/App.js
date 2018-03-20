import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Project from './Project.js';
import img1 from './gesamt_thumb.png';
import img2 from './bauhaus.jpg';
import m1 from './Artboard 1.png';
import m2 from './m2.png';
import m3 from './m3.jpg';
import m4 from './m4.jpg';
import m5 from './m5.jpg';
import m6 from './m6.jpg';
import m7 from './m7.jpg';

import video1 from './Comp 1 (1).mp4';
import video2 from './Comp 2.mp4';
import video3 from './Comp 3.mp4';


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

    const slidesMirror =  [
                              {
                                image: m1,
                                layout: 'fullImg',
                                colors: 'whiteOnBlack'
                              },
                              {
                                title: 'mirrors don\'t just reflect, they expand the space and can distort reality',
                                content: '',
                                image: m2,
                                layout: 'textRight',
                                colors: 'blackOnWhite'
                              },
                              {
                                title: 'broken mirrors are 7 years of bad luck',
                                content: 'but more interestingly, they can be a powerful expression of insecurity, self-hate and breaking through',
                                image: m3,
                                layout: 'textLeft',
                                colors: 'whiteOnBlack'
                              },
                              {
                                video: video1,
                                layout: 'fullImg',
                                colors: 'blackOnWhite'
                              },
                              {
                                title: 'black mirror: nosedive as a reflection on digital profiling',
                                image: m4,
                                layout: 'textLeft',
                                colors: 'whiteOnBlack'
                              },
                              {
                                title: 'but, what\'s wrong about it?',
                                content: 'unification of social norms, culture of conditional happiness and gratitude',
                                image: m5,
                                layout: 'textRight',
                                colors: 'blackOnWhite'
                              },
                              {
                                title: 'koyaanisqatsi: life out of balance',
                                content: 'turning the society at work into a grid',
                                image: m6,
                                layout: 'textLeft',
                                colors: 'whiteOnBlack'
                              },
                              {
                                video: video2,
                                layout: 'fullImg',
                                colors: 'blackOnWhite'
                              },
                              {
                                title: 'now time for a little horror',
                                image: m7,
                                layout: 'textRight',
                                colors: 'blackOnWhite'
                              },
                              {
                                video: video3,
                                layout: 'fullImg',
                                colors: 'blackOnWhite'
                              },

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
        <Route key='Mirrors' path='/project/mirrors' render={(props) => (
          <Project
            slides={slidesMirror}
          {...props}/>
        )}/>
      </Switch>
      </PageTransition>
      </BrowserRouter>
    );
  }
}

export default App;
