import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'
import { portfolioData } from '../../data/portfolioData'
import * as Icons from 'react-icons/fa'
import { FaCode, FaTerminal, FaProjectDiagram } from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Mapeamento de ícones
  const iconMap = {
    // Frontend
    FaHtml5: Icons.FaHtml5,
    FaCss3Alt: Icons.FaCss3Alt,
    FaJs: Icons.FaJs,
    FaReact: Icons.FaReact,
    FaWordpress: Icons.FaWordpress,
    // Backend & Database
    FaPhp: Icons.FaPhp,
    FaNode: Icons.FaNode,
    FaPython: Icons.FaPython,
    // Tools & Others
    FaGitAlt: Icons.FaGitAlt,
    FaLinux: Icons.FaLinux,
    FaTerminal: FaTerminal,
    FaProjectDiagram: FaProjectDiagram,
    // Fallback para todos os outros
    FaCode: FaCode,
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const SkillCard = ({ skill, index }) => {
    const IconComponent = iconMap[skill.icon] || FaCode
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      if (isInView) {
        const timer = setTimeout(() => {
          setProgress(skill.level)
        }, index * 100)
        return () => clearTimeout(timer)
      }
    }, [isInView, skill.level, index])

    return (
      <motion.div
        className="skill-card"
        variants={itemVariants}
        whileHover={{ scale: 1.05, y: -5 }}
      >
        <div className="skill-icon-wrapper">
          <IconComponent className="skill-icon" />
        </div>
        <h4 className="skill-name">{skill.name}</h4>
        <div className="skill-progress">
          <div className="skill-progress-bar">
            <motion.div
              className="skill-progress-fill"
              initial={{ width: 0 }}
              animate={{ width: isInView ? `${progress}%` : 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          </div>
          <span className="skill-percentage">{progress}%</span>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="skills" ref={ref} className="skills">
      <motion.div
        className="skills-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          {t.skills.title}
        </motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>
          {t.skills.subtitle}
        </motion.p>

        {portfolioData.skills.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="skills-category"
            variants={itemVariants}
          >
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-grid">
              {category.items.map((skill, index) => (
                <SkillCard
                  key={index}
                  skill={skill}
                  index={categoryIndex * 10 + index}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
