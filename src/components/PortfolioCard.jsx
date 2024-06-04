import React from 'react';
import '../styles/style.css'; // Make sure to import your CSS file

const PortfolioCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p><a href={project.repository}>Repository</a></p>
      <p><a href={project.deployed}>Deployed Application</a></p>
    </div>
  );
};
export default PortfolioCard;