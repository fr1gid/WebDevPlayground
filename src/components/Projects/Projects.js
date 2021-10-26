import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import algo from "../../Assets/Projects/algo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Full Stack Tinder Clone"
              description="A full-stack tinder clone web application that includes full functionality of swiping and also includes a chat feature. The application takes data from a firebase database and then updates the user profiles in real-time."
              link="https://github.com/fr1gid/tinder-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Twitter Sentiment Analysis"
              description="A data science project which utilizes machine learning and natural language processing to analyze the sentiment of tweets of a specific twitter user that the user specifies. The twitter user is given a rating based on how negatively or positively they are perceived online. The linear regression is then displayed on a scatter plot in the ui."
              link="https://github.com/fr1gid/Twitter-Setiment-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Python OCR"
              description="A Python Flask web application which utilizes optical character recognition. You are able to upload an image and then the text in the image is then extracted and displayed on the screen."
              link="https://github.com/fr1gid/Python-OCR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algo}
              isBlog={false}
              title="Easy Algo"
              description="PiPy package to implement different search algorithms I made to clean up my code and make it more efficient when I am practicing interview questions."
              link="https://github.com/fr1gid/easy-algo"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
