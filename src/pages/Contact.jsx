import {  Box, Heading, Text, Image, AspectRatio, Container } from '@chakra-ui/react'
import Mail from '../../Images/mail.png'
import Map from '../../Images/map.png'

function Contact() {

  return (
   <Box background="rgb(249, 248, 255)" padding={{base: '0', md: '1.5rem', lg: '3rem'}} paddingTop={{base: '2rem', md: '', lg: ''}} textAlign="center" width="100vw">
      <Heading>¿QUERÉS SUMARTE COMO SPONSOR?</Heading>
      <Text>Comunicate con nosotros y te contamos como podes formar parte del evento</Text>
      <Box display="flex" flexDirection={{base: 'column', md: 'column', lg: 'row'}} width="100%" justifyContent="center" padding="3rem">
            <Box display="flex" flexDirection="column" padding="3rem" backgroundColor="white" borderRadius="0.6rem" alignItems='center'>
                  <Image src={Map} maxWidth="48px" />
                  <Heading padding="1rem" size="lg">SEDE DEL EVENTO</Heading>
                  <Text>ITBA Sede Distrito Financiero, San Martín 202</Text>
            </Box>
            <Box display="flex" flexDirection="column" padding="3rem" backgroundColor="white" borderRadius="0.6rem" marginX={{base: '0rem', md: '0rem', lg: '3rem'}} marginY={{base: '2rem', md: '2.5rem', lg: '0rem'}} alignItems='center'>
                  <Image src={Mail} maxWidth="48px" />
                  <Heading padding="1rem" size="lg">Contactános</Heading>
                  <Text maxWidth="100%">E-Mail</Text>
            </Box>
      </Box>
      <Box display="flex" flexWrap="wrap" boxSizing="border-box"  justifyContent="center" paddingBottom="2rem">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1952.6453721482706!2d-58.37497404314368!3d-34.6055525805552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd8c7176f8bd13237!2sITBA%20Sede%20Distrito%20Financiero!5e0!3m2!1ses-419!2sar!4v1661465186687!5m2!1ses-419!2sar" style={{border: '0', width: '80%', height: '450px', objectFit: 'cover'}}></iframe>
      </Box>
   </Box>
  )
}

export default Contact