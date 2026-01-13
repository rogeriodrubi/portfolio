import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'
import { portfolioData } from '../../data/portfolioData'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experience = portfolioData.experience[0] || {
    company: 'Nome da Empresa',
    position: 'Cargo',
    period: 'Mês/Ano - Mês/Ano',
    description: 'Descrição da experiência...',
    responsibilities: ['Responsabilidade 1', 'Responsabilidade 2'],
    technologies: ['React', 'JavaScript'],
  }

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

  return (
    <section id="experience" ref={ref} className="experience">
      <motion.div
        className="experience-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          {t.experience.title}
        </motion.h2>

        <motion.div className="experience-card" variants={itemVariants}>
          <div className="experience-header">
            <div className="experience-icon">
              <FaBriefcase />
            </div>
            <div className="experience-header-text">
              <h3 className="experience-position">{experience.position}</h3>
              <h4 className="experience-company">{experience.company}</h4>
            </div>
          </div>

          <div className="experience-details">
            <div className="experience-meta">
              <div className="meta-item">
                <FaCalendarAlt className="meta-icon" />
                <span>{experience.period}</span>
              </div>
            </div>

            <p className="experience-description">{experience.description}</p>

            {experience.responsibilities && experience.responsibilities.length > 0 && (
              <div className="experience-responsibilities">
                <h5 className="responsibilities-title">
                  {t.experience.responsibilities}:
                </h5>
                <ul className="responsibilities-list">
                  {experience.responsibilities.map((responsibility, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="responsibility-item"
                    >
                      <span className="responsibility-bullet"></span>
                      {responsibility}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {experience.technologies && experience.technologies.length > 0 && (
              <div className="experience-technologies">
                <h5 className="technologies-title">Tecnologias:</h5>
                <div className="technologies-tags">
                  {experience.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience
