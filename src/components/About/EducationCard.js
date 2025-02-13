import React from 'react';
import { educations } from "../../utils/educations.js";
import { BsPersonWorkspace } from 'react-icons/bs';

const EducationCard = () => {
  const containerStyles = {
    position: 'relative',
    zIndex: 20,
    marginTop: '1rem',
    marginBottom: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const cardContainerStyles = {
    paddingTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  };

  const cardWrapperStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.2rem',
    width: '80%',
    textAlign: 'center',
  };

  const educationCardStyles = {
    backgroundColor: 'rgba(16, 17, 35, 0.7)',
    color: '#dcdcdc',
    borderRadius: '12px',
    border: '2px solid rgb(125, 42, 188)',
    padding: '1.5rem',
    boxShadow: '0 0 10px rgba(125, 42, 188, 0.45)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
  };

  return (
    <div id="education" style={containerStyles}>  
      <div style={cardContainerStyles}>
        <div style={cardWrapperStyles}>
          {educations.map((education) => (
            <div
              key={education.id}
              style={educationCardStyles}
              className='edu-icons'
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}>
                <div style={{ color: 'rgb(139, 47, 209)' }}>
                  <BsPersonWorkspace size={36} />
                </div>
                <div>
                  <p style={{ fontSize: '1.25rem', fontWeight: '500', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{education.title}</p>
                  <p style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>{education.institution}</p>
                  <p style={{ fontSize: '0.75rem', color: '#16f2b3', marginBottom: '0.25rem' }}>{education.duration}</p>
                  <p style={{ fontSize: '0.65rem', color: '#16f2b3' }}>{education.per}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
