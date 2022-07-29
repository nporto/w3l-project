import {  Box, Heading, Text, Image } from '@chakra-ui/react'
import Julian from '../../Images/julianeuss.jpeg'

function Speakers() {

  return (
   <Box padding="2rem" backgroundColor="rgb(249, 248, 255)" >
         <Heading padding="1rem">Oradores</Heading>
         <Box display="flex" justifyContent="center" alignItems="center" width="100%">
            <Box display="grid" gridTemplateColumns={{base: '1 fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'}} gridGap="5">
                  <Box position="relative">
                        <Image maxWidth="300px" src={Julian} borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Julian Neuss</Heading>
                              <Text>Co-Founder & CEO - Fanz</Text>
                              <Box>Logos</Box>
                        </Box>
                  </Box>
                  <Box height="50px" width="50px" backgroundColor="black"></Box>
                  <Box height="50px" width="50px" backgroundColor="black"></Box>
                  <Box height="50px" width="50px" backgroundColor="black"></Box>
                  <Box height="50px" width="50px" backgroundColor="black"></Box>
                  <Box height="50px" width="50px" backgroundColor="black"></Box>
            </Box>
         </Box>
         
   </Box>
  )
}

export default Speakers