import React, { Component } from 'react';
import placeholder from './placeholder.png' // relative path to image


class Avatar extends Component {
  render() {
    return <figure className="tweet-avatar">
      <img src="{logo}"/>
      </figure>
  }
}

export default Avatar;
