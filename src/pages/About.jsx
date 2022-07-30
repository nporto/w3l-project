import {  Box, ListIcon, Heading, Text, UnorderedList, ListItem, Image } from '@chakra-ui/react'
import Logo from '../../Images/Signo4.png'

function About() {

  return (
   <Box 
   id="about"
   minHeight="80vh" 
   maxWidth="100vw"
   display="flex" 
   flexDirection="column" 
   alignContent="center"
   alignItems="center"
   backgroundColor="rgb(31, 160, 183)"
   color="white">
         <Box display="flex" flexDirection={{base: 'column', md: 'row', lg: 'row'}} paddingTop="5rem" maxWidth="80%">
               <Box width={{base: '100%', md: '70%', lg: '50%'}} opacity="1" transform="translateZ(0)" transitionTimingFunction="ease-in-out" transitionDuration="1s" >
                        <Heading textAlign="center" justifySelf="center" marginBottom="1.5rem">¿QUÉ ES EL W3Lab?</Heading>
                        <UnorderedList styleType="none">
                              <ListItem fontSize="2xl">
                              <ListIcon color='green.500' />
                              Festival tecnológico que te va a sumergir completamente en el ecosistema cripto
                              </ListItem>
                              <ListItem fontSize="2xl">
                              <ListIcon color='green.500' />
                              Una experiencia unica para aprender y conectar con empresas, proyectos, protocolos y figuras del ambiente.
                              </ListItem>
                              <ListItem fontSize="2xl">
                              <ListIcon color='green.500' />
                              Disfrutá de un día completo a puro cripto.
                              </ListItem>
                        </UnorderedList>       
               </Box>
               <Box marginRight={{base: "50%", md: 'auto', lg: 'auto'}} marginTop={{base: '5%', md: 'auto', lg: 'auto'}} marginLeft={{base: 'auto', md: 'auto', lg: 'auto'}} marginBottom={{base: '0%', md: 'auto', lg: 'auto'}} width={{base: '100%', md: '70%', lg: '30%'}} textAlign="center">
                  <Image width="100%" height="auto" objectFit="cover" src={Logo} />
               </Box>
         </Box>
         <Box 
         display="grid" 
         gridTemplateColumns={{base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
         minWidth={{base: "70%", md: "80%", lg: "70%"}}
         maxWidth={{base: '80%', md: '80%', lg: '70%'}}
         gridGap={{base: "1rem", md: "5rem", lg: "5rem"}}
         paddingTop={{base: "1rem", md: "5rem", lg: "5rem"}}
         textAlign="center"
         paddingBottom="3rem">
               <Box backgroundColor="rgb(8, 34, 46)" padding="4.5rem" borderRadius="0.4rem">
                  <Heading>IMAGE</Heading>
                  <Heading size="md" padding="0.7">ZONA AUDITORIO</Heading>
                  <Text>Escucha y aprende</Text>
                  <Text>LINK</Text>
               </Box>
               <Box backgroundColor="rgb(8, 34, 46)" padding="4.5rem" borderRadius="0.4rem">
                  <Heading>IMAGE</Heading>
                  <Heading size="md" padding="0.7">ZONA CONNECT</Heading>
                  <Text>Comparti y explora</Text>
                  <Text>LINK</Text>
               </Box>
               <Box backgroundColor="rgb(8, 34, 46)" padding="4.5rem" borderRadius="0.4rem">
                  <Heading>IMAGE</Heading>
                  <Heading size="md" padding="0.7"> METAVERSO-STREAMING</Heading>
                  <Text>Rompe barreras</Text>
                  <Text>LINK</Text>
               </Box>
         </Box>
   </Box>
  )
}

export default About