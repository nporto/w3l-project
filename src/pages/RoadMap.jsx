import {  Box, ListIcon, Heading, Text, UnorderedList, ListItem, Icon } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

function RoadMap() {

  return (
   <Box 
   backgroundImage="linear-gradient(to right, rgb(6, 39, 124), rgb(19, 74, 132))" 
   display="flex" 
   flexDirection={{base: 'column', md: 'column', lg: 'column'}}
   justifyContent="center" 
   color="white"
   paddingX="15rem"
   paddingY="1rem"
   overflow="hidden">
      <Box display="flex" justifyContent="left">
            <UnorderedList styleType="none">
                  <ListItem fontSize="2xl">
                        <Icon as={CheckCircleIcon} color='white' marginRight="1rem" />
                        Selección de 15 startups
                  </ListItem>
                  <ListItem fontSize="2xl" >
                        <Icon as={CheckCircleIcon} color='white' marginRight="1rem" />
                        12 semanas de formación en temáticas W3 y generales de startups
                  </ListItem>
                  <ListItem fontSize="2xl">
                        <Icon as={CheckCircleIcon} color='white' marginRight="1rem" />
                        Encuentros semanales de 90 minutos    
                  </ListItem>
                  <ListItem fontSize="2xl">
                        <Icon as={CheckCircleIcon} color='white' marginRight="1rem" />
                        Encuentros virtuales y presenciales    
                  </ListItem>
                  <ListItem fontSize="2xl">
                        <Icon as={CheckCircleIcon} color='white' marginRight="1rem" />
                        Dos grupos de 7 a 8 participantes
                  </ListItem>
            </UnorderedList>
      </Box>
            
   </Box>
  )
}

export default RoadMap