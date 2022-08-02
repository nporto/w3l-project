import {  Box, Button, Heading, Text, Image } from '@chakra-ui/react'
import './Home.css'
import Logo from '../../Images/Signo4.png'
import Info from './Info'
import logoStandard from '../../Images/logoStandard.png'
import QR2 from '../../Images/QR2.jpeg'

function Home() {

// background linear-gradient(45deg, rgb(17, 33, 73) 0%, rgb(19, 81, 239) 100%), url(../Images/hero-bg.jpg) center center no-repeat;

  return (
   <Box 
   id="home"
   minHeight="90vh" 
   maxWidth="100vw"
   display="flex" 
   flexDirection={{base: "column-reverse", md: "row", lg: "row"}} 
   alignItems="center" 
   paddingLeft={{base: '0', md: '0', lg: '10rem'}}
   background="linear-gradient(45deg, rgb(51, 63, 255) 0%, rgb(71, 222, 242) 100%), url(../Images/hero-bg.jpg) center center no-repeat;"
   textAlign={{base: 'center', md: 'inherit', lg: 'inherit'}}>
         <Box padding="5rem" width={{base: '100%', md: '70%', lg: '50%'}}>
            <Heading color="white" size="4xl"><Image src={logoStandard} /></Heading>
            <Text marginY={{base: '1rem', md: '1rem', lg: '1.1rem'}} color="white" fontSize="1.3rem">Slogan</Text>
            <Text marginY={{base: '1rem', md: '1rem', lg: '1.1rem'}} color="green.400" fontWeight="700" fontSize="1.3rem">Fecha</Text>
            <Button paddingTop="1.6rem" colorScheme="green" padding="1.6rem" fontSize="1.5rem"><a href="#team">Get Started</a></Button>
         </Box>
         <Box 
         marginRight={{base: "0%", md: 'auto', lg: 'auto'}} 
         marginTop={{base: '50%', md: 'auto', lg: 'auto'}} 
         marginLeft={{base: '50%', md: 'auto', lg: 'auto'}} 
         marginBottom="auto" 
         width={{base: '100%', md: '70%', lg: '50%'}}>
            <Image 
            maxWidth={{base: '50%', md: '50%', lg: '360px'}}
            height="auto" 
            objectFit="cover" 
            src={QR2} />
         </Box>
   </Box>
  )
}

export default Home

//maxWidth="50%" 