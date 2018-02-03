import React, { Component } from 'react';
import './App.css';
import Article from './Article';

class App extends Component {
  render() {
    return (
      <div class="nyt-container">
        <Article
        articleDate="February 1, 2018"
        articleCategory="The Shift"
        articleTitle="Kodak's Dubious Blockchain Gamble"
        articleExcerpt="An eon or two ago, Eastman Kodak was a bleeding-edge technology company. It hired the smartest engineers and put them to build a business that, at its peak, employed 145,000 people."
        articleByline="Kevin Roose"
        articleImage="https://static01.nyt.com/images/2018/01/30/business/30ROOSE-5/30ROOSE-5-jumbo.jpg?quality=100&auto=webp"
        />
      </div>
    );
  }
}

export default App;
