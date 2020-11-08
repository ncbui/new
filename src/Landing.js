import React from "react";
import {
  Row
} from 'reactstrap';
import './Landing.css';

/**Renders a collection of components */
export default function Landing() {
  return (
    <div id="Landing" className="Landing jumbotron">
      <main>
        <Row>
          <h1>
            Hi, my name is <span className="inline-block">Cam Bui</span>
            <br />
            I'm a software developer
        </h1>
        </Row>
        <Row><a className="btn" href="http://www.github.com/ncbui">Learn more</a></Row>
      </main>
    </div>
  )
}