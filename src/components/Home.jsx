import React from 'react'
import Navbar from './Navbar/Navbar'
// import { Outlet } from 'react-router'
import AboutMe from './pages/About'
import Hero from './pages/HeroSection'
import Experience from './pages/Experience'
import ProjectsSection from './pages/projectSection'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
const Home = () => {
    return (
        <div>
            <Hero />
            <AboutMe />
            <Skills />
            <Experience />
            <ProjectsSection />
            <Contact />
        </div>
    )
}

export default Home