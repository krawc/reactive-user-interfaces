import React, { Component } from 'react';
import './App.css';

class Article extends Component {
  render() {
    return (
      <article class="nyt-singleArticle">
        <h6 class="nyt-singleArticle__date">{this.props.articleDate}</h6>
        <div class="nyt-singleArticle__contents">
          <h6 class="nyt-singleArticle__category">{this.props.articleCategory}</h6>
          <h1 class="nyt-singleArticle__title">{this.props.articleTitle}</h1>
          <p class="nyt-singleArticle__excerpt">{this.props.articleExcerpt}</p>
          <p class="nyt-singleArticle__byline">By <span class="__name">{this.props.articleByline}</span></p>
        </div>
        <div class="nyt-singleArticle__thumbnail">
          <img class="nyt-singleArticle__image" src={this.props.articleImage} alt={this.props.articleTitle}/>
        </div>
      </article>
    );
  }
}

export default Article;
