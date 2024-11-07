import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Home'
import ProjectPage from './components/ProjectPage'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className='portfolio-website'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
