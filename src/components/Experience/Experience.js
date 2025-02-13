// import React from 'react'
// import Particle from '../Particle'
// import { Col, Container, Row } from 'react-bootstrap'
// import ExperienceCard from './ExperienceCard'

// function Experience() {
//   return (
//     <Container fluid className="project-section">
//     <Particle />
//     <Container>
//       <h1 className="project-heading">
//      <strong className="purple">Experience </strong>
//       </h1>

//       <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//       <Col md={4} className="project-card">
//         <ExperienceCard/>
//         </Col>
//       </Row>
//     </Container>
//   </Container>
//   )
// }

// export default Experience

// Experience.js
import React from "react";
import Particle from "../Particle";
import { Col, Container, Row } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "WoodenStreet",
      duration: "Dec 2024 - Jan 2025",
      responsibilities: [
        "Led full-stack development of Amrit Organics B2B website using React.js, Node.js, and MySQL, increasing international client inquiries by 40%",
        "Optimized website performance achieving 60% faster load times through lazy-loading and Cloudinary integration for media management",
        "Engineered responsive UI with Tailwind CSS and Material UI, resulting in 95% user engagement across 5 key pages",
        "Implemented secure admin dashboard with MySQL authentication and Nodemailer integration, processing 100+ monthly inquiries"
      ],
      skills: ["React.js", "Node.js", "MySQL", "Tailwind CSS", "Material UI", "Vite"]
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center mb-5">
          <strong className="purple">Experience</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {experiences.map((exp, index) => (
            <Col key={index} xs={12} lg={10} className="mb-4">
              <ExperienceCard {...exp} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
