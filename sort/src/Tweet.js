import React, { Component } from 'react';
import Avatar from './Avatar';


class Tweet extends Component {
  render() {

        let dateObj = new Date();
        let month = dateObj.getUTCMonth() + 1; //months from 1-12
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();

        let newdate = year + "/" + month + "/" + day;

        let byline;
        if ( this.props.tweetAuthor ) {
          byline = "Posted by: " + this.props.tweetAuthor + " on " + newdate;
        } else {
          byline = "Posted by an anonymous user" + " on " + newdate;
        }

        return (<article className="tweet-container">
            <Avatar/>
            <div className="tweet-contents">
            <h2>{this.props.tweetText}</h2>
            <p>{byline}</p>
            </div>
          </article>
        );
  }
}

export default Tweet;
