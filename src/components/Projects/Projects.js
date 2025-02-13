import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amrit from "../../Assets/Projects/amrit.png";
import blog from "../../Assets/Projects/blog.png";
import rent from "../../Assets/Projects/rent.png";
import telegram from "../../Assets/Projects/telegram.png";
import text from "../../Assets/Projects/text.png";
import drawing from "../../Assets/Projects/drawing.png";
import crescent from "../../Assets/Projects/CRESCENT .png";
import diwali from "../../Assets/Projects/diwali.png";
import titan from "../../Assets/Projects/titan.png";
import kitab from "../../Assets/Projects/Kitab.png"
import power from "../../Assets/Projects/power.png"
import panic from "../../Assets/Projects/panic.png"
import doom from "../../Assets/Projects/doom.png"
import najar from "../../Assets/Projects/najar.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amrit}
              isBlog={false}
              title="Amrit Organics Website"
              description="It is a B2B platform for an organic products startup, featuring multilingual support, animated UI, and an admin panel for blog management. Built with React.js, Vite, and Tailwind CSS, it’s optimized with lazy-loading, Cloudinary storage, and Nodemailer to handle 100+ inquiries per month, enhancing performance and client engagement."
              demoLink="https://amritorganics.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Page"
              description="A MERN stack blog app built for sharing and exploring travel, food, and tech content. With secure authentication, interactive features, and a clean responsive UI, it makes blogging effortless and engaging."
              ghLink="https://github.com/S-reyapandey/Blog-mern"
              demoLink="https://blog-mern-3mkt.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rent}
              isBlog={false}
              title="Rent A Place"
              description="Rent-a-Place is a platform for exploring available rooms with an interactive map and detailed room cards. Users can easily filter by city or cost. Built with React, Mapbox, Node.js, and MongoDB, it’s designed to be scalable for future features and enhancements."
              ghLink="https://github.com/S-reyapandey/Rent-a-place"
              demoLink="https://rent-a-place.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={telegram}
              isBlog={false}
              title="Chatbot"
              description="The Telegram Chatbot, powered by Telegraf and ChatGPT APIs, responds to user queries with text or images. It uses DALL-E for image generation and ChatGPT-3.5 for text responses. To run the app, obtain a ChatGPT API key. Once set up, interact with the bot via Telegram by typing commands and selecting the response type (text or image)."
              ghLink="https://github.com/S-reyapandey/ChatBot"
              demoLink="https://t.me/querysol_bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drawing}
              isBlog={false}
              title="Drawing App"
              description="It is an interactive drawing tool built with HTML5, CSS3, and jQuery. It uses HTML5 Canvas for the drawing area and LocalStorage to save artwork locally. Create and save your drawings effortlessly in this user-friendly app."
              ghLink="https://github.com/S-reyapandey/Drawing_App"
              demoLink="https://fabulous-tapioca-e57592.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text}
              isBlog={false}
              title="Text Utils"
              description="Text Utility is a simple text editor for modifying and formatting text with features like case conversion, space removal, and quick edits. It provides a user-friendly interface for efficient text manipulation."
              ghLink="https://github.com/S-reyapandey/Textutils"
              demoLink="https://s-reyapandey.github.io/Textutils/"
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          Some of My <strong className="purple">Design Works</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={titan}
              isBlog={false}
              title="Titan"
              demoLink="https://www.instagram.com/p/Cujw4EXPsQD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kitab}
              isBlog={false}
              title="Kitab ka Jeevan"
              demoLink="https://www.instagram.com/p/CwSfD1ZPJp_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={power}
              isBlog={false}
              title="Power of Imagination"
              demoLink="https://www.instagram.com/p/CstX8ZUIaN9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={panic}
            isBlog={false}
            title="Panic Attack"
            demoLink="https://www.instagram.com/p/CssrIRhMMRU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={doom}
            isBlog={false}
            title="Doomsday Clock"
            demoLink="https://www.instagram.com/p/Cpkg5MAvGEp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={najar}
            isBlog={false}
            title="Najariye ka khel"
            demoLink="https://www.instagram.com/p/CqSSjHBOCZG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          />
        </Col>
        <Col md={4} className="project-card">
        <ProjectCard imgPath={crescent} isBlog={false} title="Crescent" />
      </Col>
      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={diwali}
          isBlog={false}
          title="Diwali Poster"
        />
      </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
