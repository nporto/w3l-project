import {  Box, Heading, Image, Text } from '@chakra-ui/react'
import FAQLogo from '../../Images/faq.png'

function FAQ() {

//<Box id="faq" display= 'block' content= " " margin-top= '-80px' height= '80px' visibility= 'hidden' pointerEvents= 'none'></Box>

  return (
   <Box display="flex" flexDirection="column" id="faq" justifyContent="center" alignItems="center" padding="2rem" paddingTop="5rem" backgroundColor="rgb(51, 63, 255)">
      <Heading textAlign="center" color="white">PREGUNTAS FRECUENTES</Heading>
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
                        <Image src={FAQLogo} padding="1rem" />
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
                        <Image src={FAQLogo} padding="1rem" />
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
                        <Image src={FAQLogo} padding="1rem" />
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
                        <Image src={FAQLogo} padding="1rem" />
                        <Heading size="md" fontWeight="600">¿Cuánto sale la entrada?</Heading>
                  </Box>
                 <Text paddingLeft="4rem" fontSize="lg">Es gratis!</Text>
            </Box>
      </Box>
   </Box>
  )
}

export default FAQ