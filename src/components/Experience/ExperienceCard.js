// ExperienceCard.js
import React from "react";
import { ArrowUpRight, Building2, Calendar } from "lucide-react";
import { Card } from "react-bootstrap";

function ExperienceCard({
  title,
  company,
  duration,
  responsibilities,
  skills,
}) {
  return (
    <Card className="experience-card">
      <Card.Body className="text-center">
        <div className="d-flex flex-column align-items-center mb-4">
          <Building2 className="icon mb-2" />
          <h3 className="job-title">{title}</h3>
          <div className="duration-section">
            <Calendar className="icon-small" />
            <span className="duration-text">{duration}</span>
          </div>
        </div>

        <h4 className="company-name">{company}</h4>

        <div className="responsibilities">
          {responsibilities.map((resp, index) => (
            <div key={index} className="responsibility-item">
              <ArrowUpRight className="icon-small" />
              <p className="responsibility-text">{resp}</p>
            </div>
          ))}
        </div>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
