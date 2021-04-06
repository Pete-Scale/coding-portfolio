import React from 'react'
import Project from '../../components/Project/Project'
import portfolioData from '../../assets/portfolioData.js'

const Portfolio = () => {
  return (
    <>
      {portfolioData.map(project => (
        <Project
          key={project.id}
          id={project.id}
          name={project.name}
          project_href={project.project_href}
          repo_href={project.repo_href}
          image={project.image}
          alt={project.alt}
          description={project.description}
        />
      ))}
    </>
  )
}

export default Portfolio