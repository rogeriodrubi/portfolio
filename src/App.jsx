import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <a href="#hero" className="skip-link">
            Pular para o conteúdo principal
          </a>
          <Navigation />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
