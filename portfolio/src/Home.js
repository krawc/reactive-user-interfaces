import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './Home.css';
import personalid from './personaliD.mp4';



class Home extends Component {



  render() {
    return (
      <div className="Home">
      <video autoPlay muted loop id="myID">
        <source src={personalid} type="video/mp4"/>
      </video>
        <div className="project-links">
          <h2 className="project-link"><Link to='/project/gesamt'>Gesamt Perspektive</Link></h2>
          <h2 className="project-link"><Link to='/project'>patterns(emerge);</Link></h2>
          <h2 className="project-link"><Link to='/project'>WORK/PLAY</Link></h2>
          <h2 className="project-link"><Link to='/project/mirrors'>MIRRORS</Link></h2>
        </div>
      </div>
    );
  }
}

export default Home;
