import {  Box, Heading, Image, Text } from '@chakra-ui/react'
import Gabriela2 from '../../Images/Gabriela2.jpeg'
import Fernando from '../../Images/Fernando.jpeg'
import Luis from '../../Images/Luis.jpeg'
import Santiago from '../../Images/Santiago.jpeg'

function Team() {

  return (
   <Box maxWidth="100vw" padding="3rem" paddingTop="5rem" paddingBottom="1rem" id="team">
         <Heading textAlign="center" paddingBottom="2rem">¿QUIENES SOMOS?</Heading>
         <Box 
         minWidth="100%"
         display="grid" 
         gridTemplateColumns={{base: '1 fr', md: '1fr 1fr', lg: '1fr 1fr'}} 
         gridTemplateRows={{base: '1fr 1fr 1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr', lg: '1fr 1fr'}} gridGap="4"
         paddingLeft={{base: '0rem', md: '2rem', lg: '4rem'}}>
            <Box background="rgb(71, 222, 242)" maxWidth={{base: '100%', lg: '80%'}} color="white" borderRadius="1rem" display="flex" flexDirection="row" textAlign="center" position="relative">
                  <Image 
                  maxWidth="50%" 
                  height="auto" 
                  objectFit="cover"
                  borderRadius="1rem" 
                  src={Gabriela2} />
                  <Box position="relative" top={{base: '10%', lg: '40%'}} display="flex" flexDirection="column" textAlign="center" paddingLeft="1rem">
                        <Heading>Gabriela Macagni</Heading>
                        <Text fontSize="2xl" fontWeight="500">Matterscale Ventures</Text>
                  </Box>
            </Box>
            <Box display="flex" background="rgb(71, 222, 242)" maxWidth={{base: '100%', lg: '80%'}} color="white" borderRadius="1rem" flexDirection="row" textAlign="center" position="relative">
                  <Image 
                  maxWidth="50%" 
                  height="auto" 
                  objectFit="cover"
                  borderRadius="1rem" 
                  src={Fernando} />
                  <Box position="relative" top="40%" display="flex" flexDirection="column" textAlign="center" paddingLeft="1rem">
                        <Heading fontSize={{base: '2xl', lg: '4xl'}}>Fernando Errandosoro</Heading>
                        <Text fontSize="2xl" fontWeight="500"></Text>
                  </Box>
            </Box>
            <Box display="flex" background="rgb(71, 222, 242)" maxWidth={{base: '100%', lg: '80%'}} color="white" borderRadius="1rem" flexDirection="row" textAlign="center" position="relative">
                  <Image 
                  maxWidth="50%" 
                  height="auto" 
                  objectFit="cover"
                  borderRadius="1rem" 
                  src={Luis} />
                  <Box position="relative" top="40%" display="flex" flexDirection="column" textAlign="center" paddingLeft="1rem">
                        <Heading>Luis Paolini</Heading>
                        <Text fontSize="2xl" fontWeight="500"></Text>
                  </Box>
            </Box>
            <Box display="flex" background="rgb(71, 222, 242)" maxWidth={{base: '100%', lg: '80%'}} color="white" borderRadius="1rem" flexDirection="row" textAlign="center" position="relative">
                  <Image 
                  maxWidth="50%" 
                  height="auto" 
                  objectFit="cover"
                  borderRadius="1rem" 
                  src={Santiago} />
                  <Box position="relative" top="40%" display="flex" maxWidth="100%" flexDirection="column" textAlign="center" paddingLeft="1rem">
                        <Heading>Santiago Valles</Heading>
                        <Text fontSize="2xl" fontWeight="500"></Text>
                  </Box>
            </Box>
          </Box>
          <Box minWidth="100%"
         display="grid" 
         gridTemplateColumns={{base: '1 fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr'}} 
         gridTemplateRows={{base: '1fr 1fr 1fr', md: '1fr', lg: '1fr'}} gridGap="4"
         paddingLeft="4rem"
         paddingBottom="2rem">
            <Box display="flex" flexDirection="row" textAlign="center" position="relative">
                  <Image 
                  maxWidth="50%" 
                  height="auto" 
                  objectFit="cover"
                  borderRadius="1rem" 
                  src="" />
                  <Box position="relative" top="40%" minHeight="100%" display="flex" flexDirection="column" textAlign="center" paddingLeft="1rem">
                        <Heading></Heading>
                        <Text fontSize="2xl" fontWeight="500"></Text>
                  </Box>
            </Box>
            <Box display="flex" flexDirection="row" textAlign="center" position="relative">
                  <Image 
                  maxWidth="50%" 
                  height="auto" 
                  objectFit="cover"
                  borderRadius="1rem" 
                  src="" />
                  <Box position="relative" top="40%" minHeight="100%" display="flex" flexDirection="column" textAlign="center" paddingLeft="1rem">
                        <Heading></Heading>
                        <Text fontSize="2xl" fontWeight="500"></Text>
                  </Box>
            </Box>
            <Box display="flex" flexDirection="row" textAlign="center" position="relative">
                  <Image 
                  maxWidth="50%" 
                  height="auto" 
                  objectFit="cover"
                  borderRadius="1rem" 
                  src="" />
                  <Box position="relative" top="40%" minHeight="100%" display="flex" flexDirection="column" textAlign="center" paddingLeft="1rem">
                        <Heading></Heading>
                        <Text fontSize="2xl" fontWeight="500"></Text>
                  </Box>
            </Box>
          </Box>
         
   </Box>
  )
}

export default Team

//marginRight={{base: "0%", md: 'auto', lg: 'auto'}} 
///marginTop={{base: '50%', md: 'auto', lg: 'auto'}} 
//marginLeft={{base: '50%', md: 'auto', lg: 'auto'}} 
//marginBottom="auto" 
//width={{base: '100%', md: '70%', lg: '50%'}}
//paddingLeft="2rem"