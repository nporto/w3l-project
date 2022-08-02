import {  Box, Heading, Text, Image } from '@chakra-ui/react'
import Agustina from '../../Images/agustina.jpg'
import Sebastian from '../../Images/sebastian.jpg'
import Esteban from '../../Images/esteban.jpg'
import Twitter2 from '../../Images/Twitter24.png'
import Ig2 from '../../Images/Ig24.png'
import Linkedin from '../../Images/linkedin24.png'


// a1a8a1
function SpeakersInvitados() {

  return (
   <Box padding="2rem" backgroundColor="rgb(71, 222, 242)"  >
         <Heading color="white">Speakers invitados</Heading>
         <Box display="flex" justifyContent="center" alignItems="center" width="100%" paddingTop="2rem">
                  <Box display="grid" gridTemplateColumns={{base: '1 fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'}} gridTemplateRows={{base: '1fr', md: '1fr', lg: '1fr'}} gridGap="5">
                        <Box position="relative">
                              <Image maxWidth="300px" src={Agustina} borderRadius="0.4rem" />
                              <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                                    <Heading size="lg">Agustina Fainguersch</Heading>
                                    <Text>Meta</Text>
                                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                          <Box cursor="pointer"><a ><Image src={Twitter2} href="" /></a></Box>
                                          <Box cursor="pointer" paddingX="1rem"><a target="_blank" href=""><Image src={Ig2} /></a></Box>
                                          <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/agustinafainguersch/"><Image src={Linkedin} /></a></Box>
                                    </Box>
                              </Box>
                        </Box>
                        <Box position="relative">
                              <Image maxWidth="300px" src={Sebastian} borderRadius="0.4rem" />
                              <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                                    <Heading size="lg">Sebastian Serrano</Heading>
                                    <Text>CEO & CO-Founder Ripio</Text>
                                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                          <Box cursor="pointer"><a ><Image src={Twitter2} href="" /></a></Box>
                                          <Box cursor="pointer" paddingX="1rem"><a target="_blank" href=""><Image src={Ig2} /></a></Box>
                                          <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/sebastianserrano/"><Image src={Linkedin} /></a></Box>
                                    </Box>
                              </Box>
                        </Box>
                        <Box position="relative">
                              <Image maxWidth="300px" src={Esteban} borderRadius="0.4rem" />
                              <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                                    <Heading size="lg">Esteban Ordano</Heading>
                                    <Text>Co-Founder Decentraland</Text>
                                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                          <Box cursor="pointer"><a ><Image src={Twitter2} href="" /></a></Box>
                                          <Box cursor="pointer" paddingX="1rem"><a target="_blank" href=""><Image src={Ig2} /></a></Box>
                                          <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/eordano/"><Image src={Linkedin} /></a></Box>
                                    </Box>
                              </Box>
                        </Box>
                  </Box>
            </Box>
   </Box>
  )
}

export default SpeakersInvitados