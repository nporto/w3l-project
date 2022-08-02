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

  return (
      <Box minHeight="100vh" overflowX="hidden">
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
