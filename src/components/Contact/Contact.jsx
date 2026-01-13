import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'
import { portfolioData } from '../../data/portfolioData'
import { sendEmail } from '../../utils/emailService'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: t.contact.error })
      setIsSubmitting(false)
      return
    }

    try {
      const result = await sendEmail(formData)
      if (result.success) {
        setStatus({ type: 'success', message: t.contact.success })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: t.contact.error })
      }
    } catch (error) {
      setStatus({ type: 'error', message: t.contact.error })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDownloadCV = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/cv/curriculo.pdf')
      if (!response.ok) {
        throw new Error(t.contact.fileNotFound)
      }
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'curriculo.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Erro ao baixar CV:', error)
      alert(t.contact.downloadError)
    }
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: portfolioData.personal.social.github,
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: portfolioData.personal.social.linkedin,
      icon: FaLinkedin,
    },
  ]

  return (
    <section id="contact" ref={ref} className="contact">
      <motion.div
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          {t.contact.title}
        </motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>
          {t.contact.subtitle}
        </motion.p>

        <div className="contact-wrapper">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className="form-group">
              <label htmlFor="name">{t.contact.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.contact.name}
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.contact.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t.contact.email}
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contact.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder={t.contact.message}
                aria-required="true"
              />
            </div>

            {status.message && (
              <div
                className={`form-status ${status.type === 'success' ? 'success' : 'error'}`}
              >
                {status.message}
              </div>
            )}

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? t.contact.sending : t.contact.send}
            </motion.button>
          </motion.form>

          <motion.div className="contact-info" variants={itemVariants}>
            <div className="info-card">
              <h3>{t.contact.socialMedia}</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    {...(social.url.startsWith('mailto:') 
                      ? {} 
                      : { target: '_blank', rel: 'noopener noreferrer' }
                    )}
                    className="social-link"
                  >
                    <social.icon className="social-icon" />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <motion.button
              onClick={handleDownloadCV}
              className="download-cv-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              <span>{t.contact.downloadCV}</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
