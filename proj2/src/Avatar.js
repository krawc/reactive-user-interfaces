import React, { Component } from 'react';
import placeholder from './placeholder.png' // relative path to image


class Avatar extends Component {
  render() {
    return (<div className="tweet-avatar">
      <img src={placeholder}/>
      </div>
    );
  }
}

export default Avatar;
