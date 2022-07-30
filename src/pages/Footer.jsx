import {  Box, Heading, Image, } from '@chakra-ui/react'
import Twitter3 from '../../Images/Twitter3.png'
import Ig3 from '../../Images/Ig3.png'

function Footer() {

  return (
   <Box padding="3rem" display="flex" flexDirection="row" backgroundColor="black" color="white">
      <Box display="flex" flexDirection="column">
            <Heading>W3Lab</Heading>
            <Box>
            <Heading size="md">Nuestras redes</Heading>
            <Box display="flex" flexDirection="row" paddingTop="0.6rem">
                  <Box marginLeft="1rem" marginRight="1rem">
                        <Image src={Twitter3} />
                  </Box>
                  <Box>
                        <Image src={Ig3} />
                  </Box>
            </Box>
      </Box>
      </Box>
      
   </Box>
  )
}

export default Footer