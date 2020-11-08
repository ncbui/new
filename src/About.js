import React from "react";
import {
  Row,
  Container
} from 'reactstrap';
import './About.css';
import headshot from './0.jpeg';


/**Renders a collection of components */
export default function About() {

  return (
    <section className="About section-filled jumbotron" id="About">
      <Container>
        <main>
          <h2 className="section-title">About Me</h2>
          <Row>
            <div className="col-md-6 col-12 text-right">
              <img
                src=""
                className="About-img"
                alt="close up on Cam from the shoulders up, circa November 2019"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <p>
                In my spare time I paint and turn leftovers into gold with vermiculture.In my spare time I paint and turn leftovers into gold with vermiculture.In my spare time I paint and turn leftovers into gold with vermiculture.
            </p>
              <p>
                In my spare time I paint and turn leftovers into gold with vermiculture.In my spare time I paint and turn leftovers into gold with vermiculture.In my spare time I paint and turn leftovers into gold with vermiculture.
            </p>
              <br />
              <a href="" className="btn btn-filled"><h4>Resume</h4></a>
            </div>
            </Row>
        </main>
      </Container>
    </section>
  );
}