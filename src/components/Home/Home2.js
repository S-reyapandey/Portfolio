import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile4.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              From civil engineering blueprints to web development landscapes...
              🫣
              <br />
              I've fallen in love with transforming complex ideas into elegant
              digital solutions.
              <br /> My toolkit? A blend of
              <i>
                <b className="purple">
                  {" "}
                  React, Redux, Node.js, and an insatiable curiosity for
                  innovative technologies.{" "}
                </b>
              </i>
              <br />
              <br />
              Passionate about building &nbsp;
              <i>
                <b className="purple">
                  {" "}
                  Responsive web applications, optimizing performance,
                </b>{" "}
                and pushing the boundaries of user experience.
              </i>
              <br />
              <br />
              Tech is my canvas, code is my paintbrush.🎨 💻✨
            </p>
          </Col>
          <Col
            md={5}
            className="myAvtar position-relative d-flex justify-content-center align-items-center"
          >
            <div className="circular-frame">
              <Tilt>
                <div className="circular-img-container">
                  <img src={myImg} className="circular-img" alt="avatar" />
                </div>
              </Tilt>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
