import React from 'react'
import PortfolioCard from './PortfolioCard'
import '../styles/style.css'


const projects = [
    {
      title: 'Project 1',
      image: 'path/to/project1/image.jpg',
      repository: 'https://github.com/user/project1',
      deployed: 'https://deployed-project1.com'
    },
    {
      title: 'Project 2',
      image: 'path/to/project2/image.jpg',
      repository: 'https://github.com/user/project2',
      deployed: 'https://deployed-project2.com'
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