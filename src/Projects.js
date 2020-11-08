import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import portfolioApi from "./Api";
import './Projects.css'


/**Renders a collection of projects 
 * 
 * State
 * - isLoading
 * - projects: data from backend
 * 
 * App -> ProjectsList -> Project
 * 
*/
export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getDetails() {
      let res = await portfolioApi.mockGetProjects();
      setProjects(res)
      setIsLoading(false);
    };
    getDetails();
  }, [isLoading]);

  return (
    <section className="Projects">
      <Container className="col-10">
        <main>
          <h2 className="section-title">Projects</h2>
          {
            projects.map((project, idx) =>
              <Row className="Project text-left">
                <div class="Project-details col-lg-5 col-sm-12">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a className="btn btn-lined" href="">See Live</a>
                  <a className="btn btn-empty" href={project.github}>Source Code </a>
                </div>
                <div class="Project-img col-lg-7 col-sm-12">
                  <img src="" />
                </div>
              </Row>
            )
          }
        </main>
      </Container>
    </section>

  )
}