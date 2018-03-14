import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactTransitions from 'react-transitions';


/*
PROPS:

project title : ,
project excerpt: ,
project thumbnail: ,
slides : {
  [
    class:
    title:
    text:
    image:
  ],


}

*/

class Project extends Component {
  render() {

    const slides = this.props.slides.map(function(slide, idx) {

        let colors = 'mainText-container ' + slide.colors;
        let layout = 'slide ' + slide.layout;

        return (
          <div className={layout} id="slideOne">
            <div className={colors}>
              <h1 className="mainText-title">{slide.title}</h1>
              <p className="mainText-excerpt">{slide.content}</p>
            </div>
            <div className="thumbnail-container">
              <img className="thumbnail-img" src={slide.image}/>
            </div>
          </div>
        );
    });

    return (
      <div className="Project">
        {slides}
      </div>
    );
  }
}

export default Project;
