import React from 'react';
import ProjectBox from './ProjectBox';
import './Projects.css';
import backgroundImage from './background.jpg'

const Projects = ({ projects }) => {
    return (
        <section id="Projects" className="section projects" style={{backgroundImage: `url(${backgroundImage})`}}>

              <div className="projects-container">
                <h2 className="section-title"> Projects </h2>
                    <div className="project-section">
                        {projects.map(project => (
                            <ProjectBox key={project.id} project={project} />
                        ))}
                    </div>
              </div>
        </section>
    );
};

export default Projects;
