import { Box, Heading, Text, Image } from '@chakra-ui/react'
import Twitter2 from '../../Images/Twitter24.png'
import Ig2 from '../../Images/Ig24.png'
import Linkedin from '../../Images/linkedin24.png'

function SpeakersCard(props) {

  return (
      <Box position="relative">
            <Image maxWidth="300px" src={props.image} borderRadius="0.4rem" />
            <Box color="white" position="absolute" bottom="0" textAlign="center" width="100%" background="rgba(6, 12, 34, 0.76)">
                  <Heading size="lg">{props.name}</Heading>
                  <Text fontWeight="400" fontSize="lg">{props.description}</Text>
                  <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                        <Box cursor="pointer"><a target="_blank" href={props.twLink} ><Image src={Twitter2} /></a></Box>
                        <Box cursor="pointer" paddingX="1rem"><a target="_blank" href={props.igLink}><Image src={Ig2} /></a></Box>
                        <Box cursor="pointer"><a target="_blank" href={props.linkedLink}><Image src={Linkedin} /></a></Box>
                  </Box>
            </Box>
      </Box>
  )
}

export default SpeakersCard