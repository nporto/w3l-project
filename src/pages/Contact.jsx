import {  Box, Heading, Text, Image } from '@chakra-ui/react'

function Contact() {

  return (
   <Box background="rgb(249, 248, 255)" padding="3rem" textAlign="center">
      <Heading>¿QUERÉS SUMARTE COMO SPONSOR?</Heading>
      <Text>Comunicate con nosotros y te contamos como podes formar parte del evento</Text>
      <Box display="flex" flexDirection="row" justifyContent="center" padding="3rem">
            <Box display="flex" flexDirection="column" padding="3rem" backgroundColor="white" borderRadius="0.6rem" alignItems='center'>
                  <Image src="../Images/map.png" maxWidth="48px" />
                  <Heading padding="1rem" size="lg">SEDE DEL EVENTO</Heading>
                  <Text>ITBA Sede Distrito Tecnológico, Lavarden 315</Text>
            </Box>
            <Box display="flex" flexDirection="column" padding="3rem" backgroundColor="white" borderRadius="0.6rem" marginX="3rem" alignItems='center'>
                  <Image src="../Images/mail.png" maxWidth="48px" />
                  <Heading padding="1rem" size="lg">Contactános</Heading>
                  <Text>cryptopalltrama@gmail.com</Text>
            </Box>
            <Box display="flex" flexDirection="column" padding="3rem" backgroundColor="white" borderRadius="0.6rem" alignItems="center">
            <Image src="../Images/telephone.png" maxWidth="48px" />
                  <Heading padding="1rem" size="lg">Comunicate</Heading>
                  <Text>+54 3874200199</Text>
            </Box>
      </Box>
   </Box>
  )
}

export default Contact