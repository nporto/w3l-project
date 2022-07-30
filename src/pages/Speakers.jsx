import {  Box, Heading, Text, Image } from '@chakra-ui/react'
import Julian from '../../Images/julianeuss.jpeg'
import Twitter2 from '../../Images/Twitter24.png'
import Ig2 from '../../Images/Ig24.png'
import Linkedin from '../../Images/linkedin24.png'


// a1a8a1
function Speakers() {

  return (
   <Box padding="2rem" backgroundColor="rgb(249, 248, 255)"  >
         <Heading padding="1rem">Oradores</Heading>
         <Box display="flex" justifyContent="center" alignItems="center" width="100%">
            <Box display="grid" gridTemplateColumns={{base: '1 fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'}} gridGap="5">
                  <Box position="relative">
                        <Image maxWidth="300px" src={Julian} borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Julian Neuss</Heading>
                              <Text>Co-Founder & CEO - Fanz</Text>
                              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                    <Box cursor="pointer"><a ><Image src={Twitter2} /></a></Box>
                                    <Box cursor="pointer" paddingX="1rem"><a target="_blank" href="https://www.instagram.com/julianjneuss/"><Image src={Ig2} /></a></Box>
                                    <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/jneuss/?originalSubdomain=ar"><Image src={Linkedin} /></a></Box>
                              </Box>
                        </Box>
                  </Box>
                  <Box position="relative">
                        <Image maxWidth="300px" src={Julian} borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Julian Neuss</Heading>
                              <Text>Co-Founder & CEO - Fanz</Text>
                              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                    <Box cursor="pointer"><a ><Image src={Twitter2} /></a></Box>
                                    <Box cursor="pointer" paddingX="1rem"><a target="_blank" href="https://www.instagram.com/julianjneuss/"><Image src={Ig2} /></a></Box>
                                    <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/jneuss/?originalSubdomain=ar"><Image src={Linkedin} /></a></Box>
                              </Box>
                        </Box>
                  </Box>
                  <Box position="relative">
                        <Image maxWidth="300px" src={Julian} borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Julian Neuss</Heading>
                              <Text>Co-Founder & CEO - Fanz</Text>
                              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                    <Box cursor="pointer"><a ><Image src={Twitter2} /></a></Box>
                                    <Box cursor="pointer" paddingX="1rem"><a target="_blank" href="https://www.instagram.com/julianjneuss/"><Image src={Ig2} /></a></Box>
                                    <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/jneuss/?originalSubdomain=ar"><Image src={Linkedin} /></a></Box>
                              </Box>
                        </Box>
                  </Box>
                  <Box position="relative">
                        <Image maxWidth="300px" src={Julian} borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Julian Neuss</Heading>
                              <Text>Co-Founder & CEO - Fanz</Text>
                              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                    <Box cursor="pointer"><a ><Image src={Twitter2} /></a></Box>
                                    <Box cursor="pointer" paddingX="1rem"><a target="_blank" href="https://www.instagram.com/julianjneuss/"><Image src={Ig2} /></a></Box>
                                    <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/jneuss/?originalSubdomain=ar"><Image src={Linkedin} /></a></Box>
                              </Box>
                        </Box>
                  </Box>
                  <Box position="relative">
                        <Image maxWidth="300px" src={Julian} borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Julian Neuss</Heading>
                              <Text>Co-Founder & CEO - Fanz</Text>
                              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                    <Box cursor="pointer"><a ><Image src={Twitter2} /></a></Box>
                                    <Box cursor="pointer" paddingX="1rem"><a target="_blank" href="https://www.instagram.com/julianjneuss/"><Image src={Ig2} /></a></Box>
                                    <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/jneuss/?originalSubdomain=ar"><Image src={Linkedin} /></a></Box>
                              </Box>
                        </Box>
                  </Box>
                  <Box position="relative">
                        <Image maxWidth="300px" src={Julian} borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Julian Neuss</Heading>
                              <Text>Co-Founder & CEO - Fanz</Text>
                              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                    <Box cursor="pointer"><a ><Image src={Twitter2} /></a></Box>
                                    <Box cursor="pointer" paddingX="1rem"><a target="_blank" href="https://www.instagram.com/julianjneuss/"><Image src={Ig2} /></a></Box>
                                    <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/jneuss/?originalSubdomain=ar"><Image src={Linkedin} /></a></Box>
                              </Box>
                        </Box>
                  </Box>
            </Box>
         </Box>
         
   </Box>
  )
}

export default Speakers