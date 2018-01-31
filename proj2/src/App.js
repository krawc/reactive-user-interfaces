import React, { Component } from 'react';
import './App.css';
import Tweet from './Tweet';
//import Avatar from './Avatar';


class App extends Component {
  render() {
    return (
      <div className="Tweet">
        <Tweet tweetText="First tweet." tweetAuthor="Oprah Winfrey"/>
        <Tweet tweetText="Second tweet." tweetAuthor="Melania Trump"/>
        <Tweet tweetText="Third tweet."/>
      </div>
    );
  }
}

export default App;
