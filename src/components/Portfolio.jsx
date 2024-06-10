import React from 'react';
import PortfolioCard from './PortfolioCard';
import '../styles/style.css';
import Mojito from '../assets/images/Mojito.jpg';
import firstPortfolio from '../assets/images/firstPortfolio.png'


const projects = [
    {
      title: 'Cocktail Compass',
      image: Mojito,
      repository: 'https://github.com/BrandonDell/Cocktail_Compass',
      deployed: 'https://brandondell.github.io/Cocktail_Compass/'
    },
    {
      title: 'First Portfolio',
      image: firstPortfolio,
      repository: 'https://github.com/BrandonDell/BDC-Portfolio',
      deployed: 'https://brandondell.github.io/BDC-Portfolio/'
    },
    {
      title: 'Project 3',
      image: 'path/to/project3/image.jpg',
      repository: 'https://github.com/user/project3',
      deployed: 'https://deployed-project3.com'
    },
    // Add more projects as needed
  ];
const Portfolio = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
    {projects.map((project, index) => (
      <PortfolioCard key={index} project={project} />
    ))}
  </div>
  )
}

export default Portfolio