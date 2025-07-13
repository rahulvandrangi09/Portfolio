import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Education from '../Components/Education'
import Projects from '../Components/Projects'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Skills />
      <Education />
      <Projects />
    </div>
  )
}

export default App