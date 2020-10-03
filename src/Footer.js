import React, { useEffect, useState } from "react";
import {
  Container
} from 'reactstrap';
import './Footer.css'

import portfolioApi from "./Api";

/**Renders a collection of components */
export default function Footer() {

  return (
    <div className="Footer fixed-bottom">
      <Container fluid className="Footer-container col-12">
        <div className="Footer-contact col-12 col-md-6 mr-auto text-left">
        <p className="col-6 mr-auto">
        Animated component
        </p>
        </div>
        <div className="Footer-notes col-12 col-md-6 mr-auto text-right">
          <small className="Footer-notes-text">
            fuck the system and also hire me plz
          </small>
        </div>
      </Container>
    </div>
  )
}