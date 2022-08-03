import {  UnorderedList, ListItem, Box, Button, Heading, Text, Image } from '@chakra-ui/react'
import Info from './Info'
import logoStandard from '../../Images/logoStandard.png'
import QR2 from '../../Images/QR2.jpeg'
import Twitter1 from '../../Images/Twitter32.png'
import Linkedin from '../../Images/Linkedin32.png'
import logoITBAWhite from '../../Images/logoITBAWhite.png'
import logoITBA from '../../Images/ITBA-logo.png'

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
         <Text marginY={{base: '1rem', md: '1rem', lg: '1.1rem'}} color="green.400" fontWeight="700" fontSize="1.6rem">Fecha | Lugar</Text>
            <Heading color="white" size="4xl"><Image src={logoStandard} /></Heading>
            <Text marginY={{base: '1rem', md: '1rem', lg: '1.1rem'}} color="white" fontSize="1.3rem">Slogan</Text>
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

//<Box display="flex"  alignItems="center" paddingLeft="3rem">
          //     <UnorderedList position="relative" display="flex" flexDirection="row" styleType="none" alignItems="center" justifyContent="space-around">
                   //     <ListItem px="0.8rem" color="white" cursor="pointer"><a href="https://twitter.com/ITBAW3LAB" target="_blank"><Image src={Twitter1} /></a></ListItem>
                   //     <ListItem px="0.8rem" color="white" cursor="pointer"><a href="https://www.linkedin.com/company/itba-w3-lab/?viewAsMember=true" target="_blank"><Image src={Linkedin} /></a></ListItem>
                   //     <ListItem px="0.8rem" color="white" cursor="pointer"><a href="https://www.itba.edu.ar/" target="_blank"><Image maxHeight="48px" src={logoITBAWhite} /></a></ListItem>
              // </UnorderedList>
        // </Box>