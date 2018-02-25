import React, { Component } from 'react';
import './App.css';
import Article from './Article';

const NAMES = ['Arts', 'Books', 'Education', 'Food', 'Multimedia', 'Opinion', 'T Magazine'];


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: NAMES[0],
      articles: [],
    };
  }

  apiCall(){
    return 'https://api.nytimes.com/svc/mostpopular/v2/mostemailed/' + this.state.current + '/1.json?api-key=26860a1917d04048b9e56bad8f6dc7b0'
  }

  //if the API request is successful
  componentDidMount() {
      let API = this.apiCall();
      fetch(API)
        .then(response => response.json())
        .then(data => this.setState({ articles: data.results }));
  }

  //in case of an error
  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {

    const { articles } = this.state; //get the articles info JSON for rendering

    return (
      <div className="nyt-container">
          {articles.map(article =>
              <Article
              articleUrl={article.url}
              articleDate={article.published_date}
              articleCategory={article.section}
              articleTitle={article.title}
              articleExcerpt={article.abstract}
              articleByline={article.byline}
              articleImage={article.media ? article.media[0]['media-metadata'][2]['url'] : 'http://www.barkbark.com/wp-content/uploads/nyt-01-01.svg'}
              />
          )}
      </div>

    );
  }
}

export default App;
