import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiCss3,
} from "react-icons/di";
import {
  SiFirebase,
  SiMysql,
  SiBootstrap,
  SiTailwindcss,
  SiMui,
  SiVite,
  SiHtml5,
  SiExpress,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p style={{ fontSize: "0.9rem" }}>Cpp</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: "0.9rem" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={{ fontSize: "0.9rem" }}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={{ fontSize: "0.9rem" }}>CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "0.9rem" }}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p style={{ fontSize: "0.9rem" }}>Tailwind-Css</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "0.9rem" }}>Node</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "0.9rem" }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMui />
        <p style={{ fontSize: "0.9rem" }}>Material UI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <p style={{ fontSize: "0.9rem" }}>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{ fontSize: "0.9rem" }}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p style={{ fontSize: "0.9rem" }}>My SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p style={{ fontSize: "0.9rem" }}>Express</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVite />
        <p style={{ fontSize: "0.9rem" }}>Vite</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ fontSize: "0.9rem" }}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{ fontSize: "0.9rem" }}>Firebase</p>
      </Col>
    </Row>
  );
}

export default Techstack;
