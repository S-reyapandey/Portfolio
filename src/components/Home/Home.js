import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-img.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineContacts,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";
import { CgFileDocument } from "react-icons/cg";

function Home() {
  return (
    <section>
      <div style={{ position: "relative" }}>
        {/* Particle background with lower z-index */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Particle />
        </div>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 10 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> SHREYA PANDEY</strong>
                </h1>

                <div style={{ padding: 40, textAlign: "left" }}>
                  <Type />
                </div>
                <div style={{ paddingBottom: 10 }} className="iconH">
                  <ul className="home-about-social-links">
                    <li className="social-icons">
                      <a
                        href="https://github.com/S-reyapandey"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <AiFillGithub />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://twitter.com/Shreyapand47797"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <AiOutlineTwitter />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://www.linkedin.com/in/shreya-pandey-31a306233"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    
                    <li className="social-icons">
                      <a
                        href="https://leetcode.com/u/shreyaamt02/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                      >
                        <SiLeetcode />
                      </a>
                    </li>
                  </ul>
                </div>

                <Row className="mt-4 extraB">
                  <Col xs={6} md={4} className="mb-2">
                    <Link to="/contact" as={Link} className="d-block w-100">
                      <Button
                        variant="btn-outline"
                        size="lg"
                        className="w-100 but11"
                      >
                        <AiOutlineContacts
                          style={{ marginBottom: "2px", marginInline: "6px" }}
                        />
                        Contact
                      </Button>
                    </Link>
                  </Col>
                  <Col xs={6} md={4} className="mb-2">
                    <Link to="/resume" className="d-block w-100">
                      <Button size="lg" className="w-100 but12">
                        {" "}
                        <CgFileDocument
                          style={{ marginBottom: "2px", marginInline: "6px" }}
                        />
                        Resume
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2 />
      </div>
    </section>
  );
}

export default Home;
