import {  Box, Button, Heading, Text, Image } from '@chakra-ui/react'
import './Home.css'
import Logo from '../../Images/Signo4.png'

function Home() {

  return (
   <Box 
   id="home"
   minHeight="100vh" 
   maxWidth="100vw"
   display="flex" 
   flexDirection={{base: "column-reverse", md: "row", lg: "row"}} 
   alignItems="center" 
   paddingLeft={{base: '0', md: '0', lg: '10rem'}}
   background="linear-gradient(45deg, rgb(49, 89, 88) 0%, rgb(56, 218, 250) 100%), url(../Images/hero-bg.jpg) center center no-repeat;"
   textAlign={{base: 'center', md: 'inherit', lg: 'inherit'}}>
         <Box padding="5rem" width={{base: '100%', md: '70%', lg: '50%'}}>
            <Heading color="white" size="4xl">W3Lab logo</Heading>
            <Text marginY={{base: '1rem', md: '1rem', lg: '1.1rem'}} color="white" fontSize="1.3rem">Sumergite en el ecosistema cripto</Text>
            <Text marginY={{base: '1rem', md: '1rem', lg: '1.1rem'}} color="green.400" fontWeight="700" fontSize="1.3rem">- 27 DE AGOSTO - 13:00 A 21:00 HS - ITBA - Lavarden 315</Text>
            <Button paddingTop="1.6rem" colorScheme="green" padding="1.6rem" fontSize="1.5rem"><a href="#about">Get Started</a></Button>
         </Box>
         <Box className="imageAnimation" marginRight={{base: "0%", md: 'auto', lg: 'auto'}} marginTop={{base: '50%', md: 'auto', lg: 'auto'}} marginLeft={{base: '50%', md: 'auto', lg: 'auto'}} marginBottom="auto" width={{base: '100%', md: '70%', lg: '50%'}}>
            <Image 
            maxWidth="50%" 
            height="auto" 
            objectFit="cover" 
            src={Logo} />
         </Box>
   </Box>
  )
}

export default Home