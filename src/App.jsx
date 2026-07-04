import { useEffect, useState } from 'react'
import './App.css'
import { navLinks } from './data/portfolioData'
import NeuralBackground from './components/NeuralBackground'
import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'
import Footer from './components/Footer'

function getInitialTheme() {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id)
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="app" data-theme={theme}>
      <NeuralBackground theme={theme} />
      <Sidebar activeSection={activeSection} theme={theme} onThemeToggle={toggleTheme} />
      <MobileNav activeSection={activeSection} theme={theme} onThemeToggle={toggleTheme} />

      <main className="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
        <Footer />
      </main>

      <Chatbot />
    </div>
  )
}

export default App
