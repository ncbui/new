import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import headshot from './headshot-2020-Nov.png';
import './Landing.css';

/**Renders a collection of components */
export default function Landing() {

  return (
    <Jumbotron fluid className="Landing text-left">
      <Container className="Landing-container">
          <img 
            src={headshot}
            className="Landing-img"
            alt="close up on Cam from the shoulders up, circa November 2019" />
      <header className="Landing-header">
            <h4>Hello, I am Cam Bui. </h4>
          I am a <b>full-stack software developer </b>
          working with React, Node.js/Express, Flask, Python3.
          I am a <b>full-stack software developer </b>
          working with React, Node.js/Express, Flask, Python3.

      </header>
      </Container>
    </Jumbotron>
  )
}