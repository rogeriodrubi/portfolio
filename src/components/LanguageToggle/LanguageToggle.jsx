import { useLanguage } from '../../context/LanguageContext'
import './LanguageToggle.css'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'pt' ? 'English' : 'Português'}`}
    >
      <span className={`lang-option ${language === 'pt' ? 'active' : ''}`}>
        PT
      </span>
      <span className="lang-separator">|</span>
      <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>
        EN
      </span>
    </button>
  )
}

export default LanguageToggle
