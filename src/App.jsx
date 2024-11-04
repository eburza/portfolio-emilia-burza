import Navbar from './components/Navbar'
import BannerMain from './components/BannerMain'
import About from './components/About'
import SkillsAndTools from './components/SkillsAndTools'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className='portfolio-website'>
      <Navbar />
      <BannerMain />
      <About />
      <SkillsAndTools />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
