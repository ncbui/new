import React from "react";
import { Row, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'


/**Renders a collection of components */
export default function Footer() {

  return (
    <section className="Footer align-bottom">
      <Container>
        <main>
          <h2 id="back-to-top">
            <a href="">
              <FontAwesomeIcon
                icon={['faSortUp']}
                size="3x"
                fixedWidth
              />
            </a>
        </h2>
        <h2>
          <a href="https://github.com/ncbui">
            <FontAwesomeIcon
              icon={['fab', 'github']}
              className="Landing-icon"
              size="1x"
              fixedWidth
            />
          </a>
          
          <a href="https://www.linkedin.com/in/cambui/">
            <FontAwesomeIcon
              icon={['fab', 'codepen']}
              className="Landing-icon"
              size="1x"
              fixedWidth
            > 3 </FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/cambui/">

            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
              className="Landing-icon"
              size="1x"
              fixedWidth
            />
          </a>
        </h2>
        <hr />
        <h4>
          <small className="Footer-notes-text">
            © Cam Bui, 2020
        </small>
        </h4>
        </main>
      </Container>
    </section>
  )
}