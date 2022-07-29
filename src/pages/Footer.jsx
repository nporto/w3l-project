import {  Box, Heading, Text, } from '@chakra-ui/react'

function Footer() {

  return (
   <Box padding="3rem" display="flex" flexDirection="row" backgroundColor="black" color="white">
      <Box display="flex" flexDirection="column">
            <Heading>CLUB TRAMA ITBA</Heading>
            <Text>Acercando el mundo profesional a los estudiantes universitarios desde 2012.</Text>
      </Box>
      <Box>
            <Heading marginLeft="1rem" size="md">Nuestras redes</Heading>
            <Box display="flex" flexDirection="row">
                  <Box>

                  </Box>
                  <Box>

                  </Box>
            </Box>
      </Box>
   </Box>
  )
}

export default Footer