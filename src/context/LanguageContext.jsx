import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language')
      return savedLanguage || 'pt'
    }
    return 'pt'
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language)
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'pt' ? 'en' : 'pt')
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
