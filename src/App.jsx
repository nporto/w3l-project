import { Box } from '@chakra-ui/react'
import NavBar2 from './components/NavBar2'
import Home from './pages/Home'
import About from './pages/About'
import RoadMap from './pages/RoadMap'
import Info from './pages/Info'
import Team from './pages/Team'
import Speakers from './pages/Speakers'
import SpeakersInvitados from './pages/SpeakersInvitados'
import Sponsors from './pages/Sponsors'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Footer from './pages/Footer'


function App() {

  return (
      <Box minHeight="100vh" overflowX="hidden">
        <Home />
        <NavBar2 />
        <About />
        <RoadMap />
        <Info />
        <Team />
        <Speakers />
        <SpeakersInvitados />
        <Sponsors />
        <FAQ />
        <Contact />
        <Footer />
      </Box>
    
  )
}

export default App
