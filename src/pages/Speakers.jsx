import {  Box, Heading, Text, Image } from '@chakra-ui/react'
import Julian from '../../Images/julianeuss.jpeg'
import Tomas from '../../Images/tomas.jpg'
import Nicolas from '../../Images/Nicolas.jpg'
import Pablo from '../../Images/pablo.jpg'
import Yemel from '../../Images/yemel.jpg'
import Martin from '../../Images/martin.jpg'
import Nicolas2 from '../../Images/nicolas2.jpg'
import Gabriela from '../../Images/gabriela.jpg'
import Manuel from '../../Images/manuel.jpg'
import Alfonso from '../../Images/alfonso.jpg'
import Twitter2 from '../../Images/Twitter24.png'
import Ig2 from '../../Images/Ig24.png'
import Linkedin from '../../Images/linkedin24.png'


// a1a8a1
function Speakers() {

  return (
   <Box padding="2rem" backgroundColor="rgb(249, 248, 255)" id="speakers">
         <Heading padding="1rem">Oradores</Heading>
         <Box display="flex" justifyContent="center" alignItems="center" width="100%">
            <Box display="grid" gridTemplateColumns={{base: '1 fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'}} gridTemplateRows={{base: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr'}} gridGap="5">
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
                        <Image maxWidth="300px" src={Tomas} borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Tomás Soracco</Heading>
                              <Text>POAP Co-Founder</Text>
                              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                    <Box cursor="pointer"><a ><Image src={Twitter2} /></a></Box>
                                    <Box cursor="pointer" paddingX="1rem"><a target="_blank" href=""><Image src={Ig2} /></a></Box>
                                    <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/tom%C3%A1s-soracco-192604128/"><Image src={Linkedin} /></a></Box>
                              </Box>
                        </Box>
                  </Box>
                  <Box position="relative">
                        <Image maxWidth="300px" src={Pablo} borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Pablo Sabatella</Heading>
                              <Text>DefyEducation</Text>
                              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                    <Box cursor="pointer"><a ><Image src={Twitter2} href="https://twitter.com/PabloSabbatella" /></a></Box>
                                    <Box cursor="pointer" paddingX="1rem"><a target="_blank" href="https://www.instagram.com/pablosabbatella/?hl=es"><Image src={Ig2} /></a></Box>
                                    <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/psabbatella/"><Image src={Linkedin} /></a></Box>
                              </Box>
                        </Box>
                  </Box>
                  <Box position="relative">
                        <Image maxWidth="300px" src={Nicolas} borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Nicolas Earnshaw</Heading>
                              <Text>Decentraland</Text>
                              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                    <Box cursor="pointer"><a ><Image src={Twitter2} href="https://twitter.com/nicoearnshaw" /></a></Box>
                                    <Box cursor="pointer" paddingX="1rem"><a target="_blank" href=""><Image src={Ig2} /></a></Box>
                                    <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/nicolas-earnshaw-6230a36/"><Image src={Linkedin} /></a></Box>
                              </Box>
                        </Box>
                  </Box>
                  <Box position="relative">
                        <Image maxWidth="300px" src={Yemel} borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Yemel Jardi</Heading>
                              <Text>Ingeniero Informatico - ITBA</Text>
                              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                    <Box cursor="pointer"><a ><Image src={Twitter2} href="https://twitter.com/yemeljardi?lang=es" /></a></Box>
                                    <Box cursor="pointer" paddingX="1rem"><a target="_blank" href="https://www.instagram.com/yimi_drone/"><Image src={Ig2} /></a></Box>
                                    <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/yemel/"><Image src={Linkedin} /></a></Box>
                              </Box>
                        </Box>
                  </Box>
                  <Box position="relative">
                        <Image maxWidth="300px" src={Martin} borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Martin Nagelberg</Heading>
                              <Text>Co-Founder & CTO - Tienda Dolar</Text>
                              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                    <Box cursor="pointer"><a ><Image src={Twitter2} /></a></Box>
                                    <Box cursor="pointer" paddingX="1rem"><a target="_blank" href=""><Image src={Ig2} /></a></Box>
                                    <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/martin-nagelberg/"><Image src={Linkedin} /></a></Box>
                              </Box>
                        </Box>
                  </Box>
                  <Box position="relative">
                        <Image maxWidth="300px" src={Manuel} borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Manuel Araoz</Heading>
                              <Text>Founder OpenZeppelin</Text>
                              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                    <Box cursor="pointer"><a ><Image src={Twitter2} /></a></Box>
                                    <Box cursor="pointer" paddingX="1rem"><a target="_blank" href=""><Image src={Ig2} /></a></Box>
                                    <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/manuelaraoz/"><Image src={Linkedin} /></a></Box>
                              </Box>
                        </Box>
                  </Box>
                  <Box position="relative">
                        <Image maxWidth="300px"  borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Ariel Scaliter</Heading>
                              <Text>Agrotoken</Text>
                              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                    <Box cursor="pointer"><a ><Image src={Twitter2} /></a></Box>
                                    <Box cursor="pointer" paddingX="1rem"><a target="_blank" href=""><Image src={Ig2} /></a></Box>
                                    <Box cursor="pointer"><a target="_blank" href=""><Image src={Linkedin} /></a></Box>
                              </Box>
                        </Box>
                  </Box>
                  <Box position="relative">
                        <Image maxWidth="300px" src={Nicolas2}  borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Nicolas D'onofrio</Heading>
                              <Text>Co-Founder Tienda Dolar</Text>
                              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                    <Box cursor="pointer"><a ><Image src={Twitter2} /></a></Box>
                                    <Box cursor="pointer" paddingX="1rem"><a target="_blank" href=""><Image src={Ig2} /></a></Box>
                                    <Box cursor="pointer"><a target="_blank" href=""><Image src={Linkedin} href="https://www.linkedin.com/in/nicdonofrio/" /></a></Box>
                              </Box>
                        </Box>
                  </Box>
                  <Box position="relative">
                        <Image maxWidth="300px" src={Gabriela}  borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Gabriela Macagni</Heading>
                              <Text>Matterscale Ventures</Text>
                              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                    <Box cursor="pointer"><a ><Image src={Twitter2} /></a></Box>
                                    <Box cursor="pointer" paddingX="1rem"><a target="_blank" href=""><Image src={Ig2} /></a></Box>
                                    <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/gabriela-macagni-9716968/"><Image src={Linkedin} /></a></Box>
                              </Box>
                        </Box>
                  </Box>
                  <Box position="relative">
                        <Image maxWidth="300px" borderRadius="0.4rem" />
                        <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                              <Heading size="lg">Alfonso Amat</Heading>
                              <Text>AWS</Text>
                              <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                                    <Box cursor="pointer"><a ><Image src={Twitter2} /></a></Box>
                                    <Box cursor="pointer" paddingX="1rem"><a target="_blank" href=""><Image src={Ig2} /></a></Box>
                                    <Box cursor="pointer"><a target="_blank" href="https://www.linkedin.com/in/alfonsoamat/"><Image src={Linkedin} /></a></Box>
                              </Box>
                        </Box>
                  </Box>
            </Box>
         </Box>
         
   </Box>
  )
}

export default Speakers