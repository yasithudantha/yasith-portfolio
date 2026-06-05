import { Helmet } from 'react-helmet'
import CosmicBackground from './components/CosmicBackground'
import CosmicEffects from './components/CosmicEffects'
import SectionTransition from './components/SectionTransition'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/hero.css'
import './styles/cosmic.css'

function App() {
  return (
    <>
      <Helmet>
        <title>Yasith Udantha - AI Engineer | Cosmic Portfolio</title>
        <meta name="description" content="AI Engineer | Exploring the universe of AI & Technology" />
        <meta name="keywords" content="AI Engineer, Machine Learning, Deep Learning, Python, React" />
      </Helmet>
      
      {/* Cosmic Background Layer */}
      <CosmicBackground />
      
      {/* Cosmic Effects Layer */}
      <CosmicEffects />
      
      {/* Main Content */}
      <div className="relative z-40">
        <Navbar />
        
        <SectionTransition section="home">
          <Hero />
        </SectionTransition>
        
        <SectionTransition section="about">
          <About />
        </SectionTransition>
        
        <SectionTransition section="projects">
          <Projects />
        </SectionTransition>
        
        <SectionTransition section="skills">
          <Skills />
        </SectionTransition>
        
        <SectionTransition section="certifications">
          <Certifications />
        </SectionTransition>
        
        <SectionTransition section="contact">
          <Contact />
        </SectionTransition>
        
        <Footer />
      </div>
    </>
  )
}

export default App