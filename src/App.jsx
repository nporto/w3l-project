import { Box } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Info from './pages/Info'
import Team from './pages/Team'
import Speakers from './pages/Speakers'
import SpeakersInvitados from './pages/SpeakersInvitados'
import Sponsors from './pages/Sponsors'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'


function App() {

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
  </style>

  return (
      <Box minHeight="100vh" overflowX="hidden" style={{fontFamily: 'Poppins'}} >
        <Home />
        <NavBar />
        <Info />
        <Team />
        <Speakers />
        <SpeakersInvitados />
        <Sponsors />
        <FAQ />
        <Contact />
      </Box>
    
  )
}

export default App
