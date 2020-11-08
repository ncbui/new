import React from "react";
import { Container, Row } from 'reactstrap';
import './Contact.css';
import portfolioApi from './Api';




/**Renders Footer fixed to the bottom of the viewport */
export default function Contact() {
  return (
    <section id="contact" className="Contact section-filled">
      <Container>
        <main className="text-center">
          <h2 className="section-title">Contact</h2>
          <h3>
            Would you like to work with me? Wonderful!
          </h3>
            <div>
            <a className="btn btn-filled" href=""> <h4>Let's Talk</h4></a>
            </div>
        </main>
      </Container>
    </section>
  )
}