import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import NavBar2 from './components/NavBar2'
import Home from './pages/Home'
import About from './pages/About'
import Info from './pages/Info'
import Team from './pages/Team'
import Speakers from './pages/Speakers'
import Sponsors from './pages/Sponsors'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <Router>
      <Box minHeight="100vh" overflowX="hidden">
        <NavBar2 />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/pages/about" element={<About />} exact />
          <Route path="/pages/info" element={<Info />} exact />
        </Routes>
        <About id="about" />
        <Info id="info" />
        <Team />
        <Speakers />
        <Sponsors />
        <FAQ />
        <Contact />
        <Footer />
      </Box>
    </Router>
    
  )
}

export default App
