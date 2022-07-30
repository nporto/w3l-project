import { Box, Heading, Text } from '@chakra-ui/react'

function Info() {

  return (
   <Box 
   backgroundImage="linear-gradient(to right, rgb(6, 39, 124), rgb(41, 94, 229))" 
   display="flex" 
   flexDirection={{base: 'column', md: 'row', lg: 'row'}}
   justifyContent="space-around" 
   alignItems="center"
   color="white"
   paddingX="9rem"
   paddingY="1rem"
   overflow="hidden">
         <Box display="flex" justifyContent="space-around" alignItems="center" maxWidth="70vw">
            <Box display="flex"flexDirection="column" paddingX={{base: '0', md: '1.6rem', lg: '3rem'}}>
               <Heading textAlign="center">+700</Heading>
               <Text>PARTICIPANTES</Text>
            </Box>
            <Box display="flex" flexDirection="column" paddingX={{base: '0.6rem', md: '1.6rem', lg: '3rem'}}>
               <Heading textAlign="center">20</Heading>
               <Text>ORADORES</Text>
            </Box>
            <Box display="flex" flexDirection="column" paddingX={{base: '0.6rem', md: '1.6rem', lg: '3rem'}}>
               <Heading textAlign="center">12</Heading>
               <Text>CHARLAS</Text>
            </Box>
            <Box display="flex" flex="0 0 auto" flexDirection="column" paddingX={{base: '0', md: '1.6rem', lg: '3rem'}}>
               <Heading textAlign="center">10</Heading>
               <Text>TALLERES</Text>
            </Box>
         </Box>
   </Box>
  )
}

export default Info