import {  Box, Heading, ListItem, Image } from '@chakra-ui/react'
import SponsorsBanner from '../../Images/sponsors.jpeg'

function Sponsors() {

  return (
   <Box padding="2rem" paddingTop="5rem" textAlign="center" width="100vw" id="sponsors">
      <Heading textAlign="center">Sponsors y colaboraciones</Heading>
            <Box display="flex" justifyContent="center" alignItems="center" height="auto">
                  <Image objectFit="cover" src={SponsorsBanner} />
            </Box>
            
   </Box>
  )
}

export default Sponsors