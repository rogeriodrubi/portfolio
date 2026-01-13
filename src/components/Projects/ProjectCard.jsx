import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa'
import './Projects.css'

const ProjectCard = ({ project, index, onOpenModal, featuredLabel = 'Featured' }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="project-image-wrapper">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="project-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div 
          className="project-image-placeholder"
          style={{ display: project.image ? 'none' : 'flex' }}
        >
          <FaEye className="placeholder-icon" />
        </div>
        <div className="project-overlay">
          <div className="project-actions">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-btn"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt />
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-btn"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub />
              </a>
            )}
            <button
              className="project-action-btn"
              onClick={() => onOpenModal(project)}
            >
              <FaEye />
            </button>
          </div>
        </div>
        {project.featured && (
          <div className="project-featured-badge">{featuredLabel}</div>
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
