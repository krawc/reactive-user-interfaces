import React, { Component } from 'react';
import './App.css';

class Article extends Component {
  render() {
    return (
      <article className="nyt-singleArticle">
          <h6 className="nyt-singleArticle__date">{this.props.articleDate}</h6>
          <div className="nyt-singleArticle__contents">
            <h6 className="nyt-singleArticle__category">{this.props.articleCategory}</h6>
            <h1 className="nyt-singleArticle__title"><a href={this.props.articleUrl}>{this.props.articleTitle}</a></h1>
            <p className="nyt-singleArticle__excerpt">{this.props.articleExcerpt}</p>
            <p className="nyt-singleArticle__byline">{this.props.articleByline}</p>
          </div>
          <div className="nyt-singleArticle__thumbnail">
            <img className="nyt-singleArticle__image" src={this.props.articleImage} alt={this.props.articleTitle}/>
          </div>
      </article>
    );
  }
}

export default Article;
