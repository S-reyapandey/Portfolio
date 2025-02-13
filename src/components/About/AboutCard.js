import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shreya Pandey</span>, a web developer with a passion for building innovative and efficient solutions.
            <br />
            I specialize in creating seamless and engaging web experiences, using my skills in programming and technology to bring ideas to life. Whether it's crafting clean, responsive designs or developing robust applications, I thrive on tackling new challenges and learning along the way.
            <br/>
            <br />
            When I’m not coding, you’ll find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Series/Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is all about the next step."{" "}
          </p>
          <footer className="blockquote-footer">Shreya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
