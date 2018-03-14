import React, { Component } from 'react';
import './App.css';
import Tweet from './Tweet';


class App extends Component {

  constructor(props) {
    super(props);
    this.changeStateA = this.changeStateA.bind(this);
    this.changeStateB = this.changeStateB.bind(this);
    this.state = {
      tweets: [
        {handle: 'user1', content: 'This is the first featured tweet.'},
        {handle: 'user2', content: 'This is the second tweet.'},
        {handle: 'user3', content: 'This is the third tweet.'}
      ],
      sort: 'asc'
    }
  }

  changeStateA() {
    this.setState ({
      sort: 'asc'
    });
  }

  changeStateB() {
    this.setState ({
      sort: 'desc'
    });
  }

  render() {
    let allTweets = this.state.tweets.slice();
    if (this.state.sort === 'desc') {
      allTweets = allTweets.filter(tweet => {
        return tweet.handle.match('2');
      });
    }
    const feed = allTweets.map((tweet, i) => {
      return (
        <Tweet tweetText={tweet.content} tweetAuthor={tweet.handle}/>
      );
    });

    return (
      <div className="Feed">
      <button className="asc" onClick={this.changeStateA}>A</button>
      <button className="desc" onClick={this.changeStateB}>B</button>
        {feed}
      </div>
    );

  }
}

export default App;
