import {  Box, Heading } from '@chakra-ui/react'
import Agustina from '../../Images/agustina.jpg'
import Sebastian from '../../Images/sebastian.jpg'
import Esteban from '../../Images/esteban.jpg'
import Card from '../components/SpeakersCard'


// a1a8a1
function SpeakersInvitados() {

  return (
   <Box padding="2rem" backgroundColor="rgb(71, 222, 242)"  >
         <Heading color="white">Speakers invitados</Heading>
         <Box display="flex" justifyContent="center" alignItems="center" width="100%" paddingTop="2rem">
                  <Box display="grid" gridTemplateColumns={{base: '1 fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'}} gridTemplateRows={{base: '1fr', md: '1fr', lg: '1fr'}} gridGap="5">
                        <Card image={Agustina} name="Agustina Fainguersch" description="Meta" twLink="#" igLink="#" linkedLink="https://www.linkedin.com/in/agustinafainguersch/" />
                        <Card image={Sebastian} name="Sebastian Serrano" description="CEO & CO-Founder Ripio" twLink="#" igLink="#" linkedLink="https://www.linkedin.com/in/sebastianserrano/" />
                        <Card image={Esteban} name="Esteban Ordano" description="Co-Founder Decentraland" twLink="#" igLink="#" linkedLink="https://www.linkedin.com/in/eordano/" />
                  </Box>
            </Box>
   </Box>
  )
}

export default SpeakersInvitados