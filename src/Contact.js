import React from "react";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { Container, Row } from 'reactstrap';
import './Contact.css';
import portfolioApi from './Api';




/**Renders Footer fixed to the bottom of the viewport */
export default function Contact() {
  return (
    <section id="contact" className="Contact section-filled">
      <Container>
        <main className="text-center">
          <Fade>
          <h2 className="section-title">Contact</h2>
          </Fade>
          <Flip bottom cascade>
          <h3>
          Would you like to work with me? Wonderful!
          </h3>
          <div>
          <a className="btn btn-lined" href=""> <h4>Let's Talk</h4></a>
          </div>
          </Flip>
        </main>
      </Container>
    </section>
  )
}