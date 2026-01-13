import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'
import { portfolioData } from '../../data/portfolioData'
import './About.css'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [counted, setCounted] = useState(false)
  const [imageError, setImageError] = useState(false)

  const stats = [
    { number: 2, suffix: '', label: t.about.statsYears },
    { number: 10, suffix: '+', label: t.about.statsProjects },
    { number: 10, suffix: '+', label: t.about.statsTech },
  ]

  useEffect(() => {
    if (isInView && !counted) {
      setCounted(true)
    }
  }, [isInView, counted])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const Counter = ({ end, suffix, label }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (isInView && counted) {
        const duration = 2000
        const steps = 60
        const increment = end / steps
        const stepDuration = duration / steps

        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= end) {
            setCount(end)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, stepDuration)

        return () => clearInterval(timer)
      }
    }, [isInView, counted, end])

    return (
      <motion.div className="stat-item" variants={itemVariants}>
        <div className="stat-number">
          {count}{suffix}
        </div>
        <div className="stat-label">{label}</div>
      </motion.div>
    )
  }

  return (
    <section id="about" ref={ref} className="about">
      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          {t.about.title}
        </motion.h2>

        <div className="about-wrapper">
          <motion.div className="about-text" variants={itemVariants}>
            <div className="about-image-wrapper">
              <div className="about-image">
                {portfolioData.personal.photo && !imageError ? (
                  <img 
                    src={portfolioData.personal.photo} 
                    alt={portfolioData.personal.name}
                    className="profile-image"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="image-placeholder">
                    {portfolioData.personal.name.charAt(0)}
                  </div>
                )}
                <div className="image-glow"></div>
              </div>
            </div>
            <p className="about-description">
              {t.portfolio.personal.bio || t.about.description}
            </p>
          </motion.div>

          <motion.div className="about-stats" variants={itemVariants}>
            {stats.map((stat, index) => (
              <Counter
                key={index}
                end={stat.number}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
