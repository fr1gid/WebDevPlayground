import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/resume (2).pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://drive.google.com/file/d/1E4ugCO4oBC9MoxZafAii3q7qhR_mfJcR/view?usp=sharing";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Engineer Intern [Empava] (Los Angeles, CA)"
              date="August 2021 - Present"
              location="Los Angeles, CA"
              content={[
                "Used Node.js, GraphQL and AWS to develop the back end for a large scale client database.",
                "Used React.js to display Salesforce client data in a gamified and easy to read format.",
                "Used JSForce to implement data for over 150,000 potential customers",
                "Used JIRA as the bug tracking system to track and maintain the history of bugs/issues on an everyday basis.",
              ]}
            />
            <Resumecontent
              title="Engineering Intern [ClearWell Engineering]"
              location="Cedar Rapids, IA"
              date="May 2021 - August 2021"
              content={[
                "Facilitated a team which utilized software to design roads and communities which house hundreds of occupants.",
                "Developed Lisp commands to improve productivity and workflow for all of the companies engineers.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
