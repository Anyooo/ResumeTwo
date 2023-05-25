import React from 'react';
import './ProjectBox.css';

const ProjectBox = ({ project }) => {
    return (
        <div className="project-box">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                    {project.technologies.map((technology, index) => (
                        <span key={index} className="technology-tag">{technology}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectBox;
