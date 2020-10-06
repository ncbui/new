import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import './Landing.css';

/**Renders a collection of components */
export default function Landing() {

  return (
    <Jumbotron fluid className="Landing text-left">
      <Container className="Landing-container col-md-6 mx-auto">
      <header className="Landing-header">
          <h2>Hello, I am Cam Bui. </h2>
          I am a <h6>full-stack software developer </h6> 
          <small>
          working with React, Node.js/Express, Flask, Python3
          </small>

      </header>
      </Container>
    </Jumbotron>
  )
}