import {  Box, Heading, ListItem, Image } from '@chakra-ui/react'

function Sponsors() {

  return (
   <Box padding="2rem" textAlign="center" width="100vw">
      <Heading textAlign="center">Sponsors y colaboraciones</Heading>
            <Box display="flex" justifyContent="center" alignItems="center" height="auto">
                  <Image objectFit="cover" src="../Images/sponsors.jpeg" />
            </Box>
            
   </Box>
  )
}

export default Sponsors