import React from 'react'
import Header from '../home/header.js'
import About from '../home/about.js'
import Contact from '../home/Contact.js'
import  Skills from '../home/skills.js'
import Testimonials from '../home/Testimonials.js'
import Experience from '../home/Experience.js'
import Work from '../home/work.js'
import Footer from '../home/footer.js'

const Home = () => {
  return (
    <main>
         <Header/>
          <About/>
          <Skills/>
          <Contact/>
        <Experience/>
        <Work/>
        <Footer/>
        <Testimonials/>
    </main>
  )
}

export default Home
