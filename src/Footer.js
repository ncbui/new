import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import './Footer.css'

/**Renders a collection of components */
export default function Footer() {

  return (
    <div className="Footer fixed-bottom">
      <Container fluid className="Footer-container col-12">
        <Row className="align-items-bottom">
          <Col className="Footer-notes col-12 col-md-6 mr-auto text-center text-md-left align-bottom">
            <p className="col-12 col-md-8 mr-auto">
              <small className="Footer-notes-text">
                fuck the system && hire me plz
          </small>
      </p>
          </Col>
          <Col className="Footer-contact col-12 col-md-6 mr-auto text-center text-md-right">
              <a href="www.github.com/ncbui">
                <FontAwesomeIcon
                  icon={['fab', 'github']} 
                  className="Footer-icon"
                  size="xl"
                  fixedWidth
                />
              </a>
              <a href="www.linkedin.com/in/cambui">
                <FontAwesomeIcon
                  icon={['fab', 'linkedin']} 
                  className="Footer-icon"
                  size="xl"
                  fixedWidth
                />
              </a>
              <a href="www.FIXME.com">
                <FontAwesomeIcon
                icon={['far', 'envelope']} 
                  className="Footer-icon"
                  size="xl"
                  fixedWidth
                />
              </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}