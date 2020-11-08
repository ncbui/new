import React from "react";
import Fade from 'react-reveal/Fade';
import {
  Row,
  Container
} from 'reactstrap';
import './About.css';
import headshot from './0.jpeg';


/**Renders a collection of components */
export default function About() {

  return (
    <section className="About section section-filled jumbotron" id="About">
      <Container>
        <main className="col-12 col-lg-8 mx-auto">
          <Fade>
            <h2 className="section-title">About Me</h2>
          </Fade>
          <Row>
            <Fade bottom>
              <div className="col-lg-6 col-12 text-right">
                <img
                  src=""
                  className="About-img"
                  alt="close up on Cam from the shoulders up, circa November 2019"
                />
              </div>
            </Fade>
            <Fade left>
              <div className="col-lg-6 col-12">
                <p>
                  In my spare time I paint and turn leftovers into gold with vermiculture.In my spare time I paint and turn leftovers into gold with vermiculture.In my spare time I paint and turn leftovers into gold with vermiculture.
          </p>
                <p>
                  In my spare time I paint and turn leftovers into gold with vermiculture.In my spare time I paint and turn leftovers into gold with vermiculture.In my spare time I paint and turn leftovers into gold with vermiculture.
          </p>
                <br />
                <a href="" className="btn btn-lined"><h4>Resume</h4></a>
              </div>
            </Fade>
          </Row>
        </main>
      </Container>
    </section>
  );
}