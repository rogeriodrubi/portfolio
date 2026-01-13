import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'
import { portfolioData } from '../../data/portfolioData'
import ProjectCard from './ProjectCard'
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState(null)

  // Mesclar projetos traduzidos com dados estáticos
  const projects = portfolioData.projects.map((project, index) => {
    const translatedProject = t.portfolio.projects[index] || {}
    return {
      ...project,
      title: translatedProject.title || project.title,
      description: translatedProject.description || project.description,
    }
  })

  // Atualizar selectedProject quando o idioma mudar
  useEffect(() => {
    if (selectedProject) {
      const updatedProject = projects.find(p => p.id === selectedProject.id)
      if (updatedProject) {
        setSelectedProject(updatedProject)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" ref={ref} className="projects">
      <motion.div
        className="projects-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          {t.projects.title}
        </motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>
          {t.projects.subtitle}
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenModal={openModal}
              featuredLabel={t.projects.featured}
            />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={closeModal}
                aria-label={t.projects.closeModal}
              >
                <FaTimes />
              </button>

              <div className="modal-image">
                {selectedProject.image ? (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="modal-project-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  className="project-image-placeholder-large"
                  style={{ display: selectedProject.image ? 'none' : 'flex' }}
                >
                  {selectedProject.title}
                </div>
              </div>

              <div className="modal-content">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-description">
                  {selectedProject.description}
                </p>

                <div className="modal-technologies">
                  <h4>{t.projects.technologies}:</h4>
                  <div className="modal-tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="modal-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-btn modal-btn-primary"
                    >
                      <FaExternalLinkAlt />
                      {t.projects.viewDemo}
                    </a>
                  )}
                  {selectedProject.codeUrl && (
                    <a
                      href={selectedProject.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-btn modal-btn-secondary"
                    >
                      <FaGithub />
                      {t.projects.viewCode}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
