import {  Box, Heading, Image, Text } from '@chakra-ui/react'

function FAQ() {

  return (
   <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding="2rem" backgroundColor="purple.300">
      <Heading textAlign="center">PREGUNTAS FRECUENTES</Heading>
      <Box padding="2rem" >
            <Box 
            borderRadius="0.6rem" 
            backgroundColor="white" 
            padding="1rem" 
            display="flex"
            flexDirection="column"
            minWidth="60vw"
            marginBottom="1rem">
                  <Box display="flex" 
                  textAlign="left"
                  flexDirection="row" 
                  alignItems="center" >
                        <Image src="../Images/faq.png" padding="1rem" />
                        <Heading size="md" fontWeight="600">¿Cuánto sale la entrada?</Heading>
                  </Box>
                 <Text paddingLeft="4rem" fontSize="lg">Es gratis!</Text>
            </Box>
            <Box 
            borderRadius="0.6rem" 
            backgroundColor="white" 
            padding="1rem" 
            display="flex"
            flexDirection="column"
            minWidth="60vw"
            marginBottom="1rem">
                  <Box display="flex" 
                  textAlign="left"
                  flexDirection="row" 
                  alignItems="center" >
                        <Image src="../Images/faq.png" padding="1rem" />
                        <Heading size="md" fontWeight="600">¿Cuánto sale la entrada?</Heading>
                  </Box>
                 <Text paddingLeft="4rem" fontSize="lg">Es gratis!</Text>
            </Box>
            <Box 
            borderRadius="0.6rem" 
            backgroundColor="white" 
            padding="1rem" 
            display="flex"
            flexDirection="column"
            minWidth="60vw"
            marginBottom="1rem">
                  <Box display="flex" 
                  textAlign="left"
                  flexDirection="row" 
                  alignItems="center" >
                        <Image src="../Images/faq.png" padding="1rem" />
                        <Heading size="md" fontWeight="600">¿Cuánto sale la entrada?</Heading>
                  </Box>
                 <Text paddingLeft="4rem" fontSize="lg">Es gratis!</Text>
            </Box>
            <Box 
            borderRadius="0.6rem" 
            backgroundColor="white" 
            padding="1rem" 
            display="flex"
            flexDirection="column"
            minWidth="60vw"
            marginBottom="1rem">
                  <Box display="flex" 
                  textAlign="left"
                  flexDirection="row" 
                  alignItems="center" >
                        <Image src="../Images/faq.png" padding="1rem" />
                        <Heading size="md" fontWeight="600">¿Cuánto sale la entrada?</Heading>
                  </Box>
                 <Text paddingLeft="4rem" fontSize="lg">Es gratis!</Text>
            </Box>
      </Box>
   </Box>
  )
}

export default FAQ