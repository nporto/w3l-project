import {  Box, ListIcon, Heading, Text, UnorderedList, ListItem, Image } from '@chakra-ui/react'

function Team() {

  return (
   <Box maxWidth="100vw" padding="3rem" paddingBottom="0">
         <Heading textAlign="center">¿QUIENES SOMOS?</Heading>
         <Box display="flex" flexDirection="row">
            <Box width={{base: '100%', md: '80%', lg: "70%"}} padding={{base: '2rem', md: '3rem', lg: '4rem'}} paddingLeft={{base: '5rem', md: '7rem', lg: '9rem'}}>
                  <Box display="flex" flexDirection="row" padding="2rem">
                        <Box minWidth="40px" height="auto" paddingRight="0.3rem">
                              <Image src="../Images/Team section 3.png"></Image>
                        </Box>
                        <Box display="flex" flexDirection="column">    
                              <Heading size="lg" fontWeight="500">Trama</Heading>
                              <Text fontSize="lg">Trama es una organización de estudiantes que nace en 2012 con dos objetivos principales, por un lado acercar el mundo laboral a los estudiantes y por otro generar en los jóvenes interés en las temáticas de actualidad.</Text>
                        </Box>
                  </Box>
                  <Box display="flex" flexDirection="row" padding="2rem" paddingY="0">
                        <Box minWidth="40px" height="auto" paddingRight="0.3rem">
                              <Image src="../Images/Team section.png"></Image>
                        </Box>
                        <Box display="flex" flexDirection="column">    
                              <Heading size="lg" fontWeight="500">Nuestros Clubes</Heading>
                              <Text fontSize="lg">La organización cuenta con cinco clubes: Emprendedores, Finanzas, Consultoría, Media y IT. Cada club tiene un ciclo de actividades anual, abierto a todos los estudiantes, que brinda la posibilidad de conocer de cerca cada uno de estos campos.</Text>
                        </Box>
                  </Box>
                  <Box display="flex" flexDirection="row" padding="2rem">
                        <Box minWidth="40px" height="auto" paddingRight="0.3rem">
                              <Image src="../Images/Team section 2.png"></Image>
                        </Box>
                        <Box display="flex" flexDirection="column">    
                              <Heading size="lg" fontWeight="500">Club Finanzas</Heading>
                              <Text fontSize="lg">En el Club de Finanzas de Trama ITBA organizamos actividades para ayudarte a introducirte en este apasionante mundo! Competencias de trading, crypto, challenges, charlas y mucho más!</Text>
                        </Box>
                  </Box>
                  <Box paddingTop="2rem" textAlign="center"><a href="https://www.instagram.com/trama.itba/">Conocer mas</a></Box>
                  
            </Box>
            <Box 
            marginRight={{base: "0%", md: 'auto', lg: 'auto'}} 
            marginTop={{base: '50%', md: 'auto', lg: 'auto'}} 
            marginLeft={{base: '50%', md: 'auto', lg: 'auto'}} 
            marginBottom="auto" 
            width={{base: '100%', md: '70%', lg: '50%'}}
            paddingLeft="2rem">
                  <Image 
                  maxWidth="50%" 
                  height="auto" 
                  objectFit="cover" 
                  src="../Images/Logo Trama.png" />
            </Box>
          </Box>
         
   </Box>
  )
}

export default Team