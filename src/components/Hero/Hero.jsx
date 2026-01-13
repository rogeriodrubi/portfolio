import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'
import { portfolioData } from '../../data/portfolioData'
import { FaArrowDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section id="hero" ref={heroRef} className="hero">
      <div className="hero-background">
        <motion.div
          className="hero-gradient-orb"
          animate={{
            x: `${mousePosition.x}%`,
            y: `${mousePosition.y}%`,
          }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 30,
          }}
        />
        <div className="hero-grid"></div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={itemVariants}>
          <span className="badge-text">👋 {t.hero.welcome}</span>
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          <span className="hero-greeting">{t.hero.greeting}</span>
          <span className="hero-name">
            <span className="name-highlight">{portfolioData.personal.name}</span>
          </span>
        </motion.h1>

        <motion.div
          className="hero-subtitle-wrapper"
          variants={itemVariants}
        >
          <p className="hero-subtitle">
            <span className="typing-text">{t.hero.subtitle}</span>
          </p>
        </motion.div>

        <motion.p className="hero-description" variants={itemVariants}>
          {t.hero.description} {t.hero.usingTech}
          <span className="tech-highlight"> React</span>,
          <span className="tech-highlight"> JavaScript</span> {t.hero.andModernTech}
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
        <motion.a
          href="#projects"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('projects')
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={t.hero.viewProjects}
        >
          <span>{t.hero.viewProjects}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
        <motion.a
          href="#contact"
          className="btn btn-secondary"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('contact')
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={t.hero.contactMe}
        >
          <span>{t.hero.contactMe}</span>
        </motion.a>
        </motion.div>

        <motion.div
          className="hero-scroll-indicator"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span className="scroll-text">{t.hero.scrollDown}</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
