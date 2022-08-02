import {  Box, Heading, Text, Image } from '@chakra-ui/react'
import Mail from '../../Images/mail.png'
import Map from '../../Images/map.png'

function Contact() {

  return (
   <Box background="rgb(249, 248, 255)" padding="3rem" textAlign="center" width="100vw">
      <Heading>¿QUERÉS SUMARTE COMO SPONSOR?</Heading>
      <Text>Comunicate con nosotros y te contamos como podes formar parte del evento</Text>
      <Box display="flex" flexDirection={{base: 'column', md: 'column', lg: 'row'}} width="100%" justifyContent="center" padding="3rem">
            <Box display="flex" flexDirection="column" padding="3rem" backgroundColor="white" borderRadius="0.6rem" alignItems='center'>
                  <Image src={Map} maxWidth="48px" />
                  <Heading padding="1rem" size="lg">SEDE DEL EVENTO</Heading>
                  <Text>ITBA Sede Distrito Tecnológico, Lavarden 315</Text>
            </Box>
            <Box display="flex" flexDirection="column" padding="3rem" backgroundColor="white" borderRadius="0.6rem" marginX={{base: '0rem', md: '0rem', lg: '3rem'}} marginY={{base: '2rem', md: '2.5rem', lg: '0rem'}} alignItems='center'>
                  <Image src={Mail} maxWidth="48px" />
                  <Heading padding="1rem" size="lg">Contactános</Heading>
                  <Text maxWidth="100%">E-Mail</Text>
            </Box>
      </Box>
   </Box>
  )
}

export default Contact