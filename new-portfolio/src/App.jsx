import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactInfo from './components/ContactInfo'
import Contacts from './components/Contacts'

const App = () => {
  return (
    <div>
      <div className="min-h-screen bg-slate-900 text-gray-100">
            <Navigation />
            <Hero />
            <About/>
            <Skills />
            <Projects />
            <ContactInfo/>
            <Contacts />
        </div>
    </div>
  )
}

export default App