import React from "react";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import {
  Row
} from 'reactstrap';
import './Landing.css';

/**Renders a collection of components */
export default function Landing() {
  return (
    <div id="Landing" className="Landing jumbotron">
      <main>
        <Fade left cascade>
          <div>
            <h1>
              Hi, my name is <span>Cam Bui</span>
            </h1>
            <h1>
              I'm a software developer
      </h1>
            <a className="btn btn-covered" href="http://www.github.com/ncbui">Learn More</a>
          </div>
        </Fade>
      </main>
    </div>
  )
}