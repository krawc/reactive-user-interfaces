import React, { Component } from 'react';
import './Tweet.css';

class Tweet extends Component {
  render() {
    return (
      <article className="tweet-container">
        <h2>{this.props.tweetText}</h2>
      </article>
    );
  }
}

export default Tweet;
