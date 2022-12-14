import {  Box, Heading, Image, Text } from '@chakra-ui/react'
import Gabriela2 from '../../Images/Gabriela2.jpeg'
import Fernando from '../../Images/Fernando.jpeg'
import Luis from '../../Images/Luis.jpeg'
import Santiago from '../../Images/Santiago.jpeg'
import TeamCard from '../components/TeamCard'
import TeamCardCollab from '../components/TeamCardCollab'
import Bautista from '../../Images/Bautista.jpeg'
import Nicolas from '../../Images/Nicolas.jpeg'
import Marcos from '../../Images/Marcos.webp'

function Team() {

  return (
   <Box maxWidth="100vw" padding="3rem" paddingTop="3rem" paddingBottom="2rem" id="team">
         <Heading textAlign="center" paddingBottom="2rem">¿QUIENES SOMOS?</Heading>
         <Box 
         minWidth="100%"
         display="grid" 
         gridTemplateColumns={{base: '1 fr', md: '1fr 1fr', lg: '1fr 1fr'}} 
         gridTemplateRows={{base: '1fr 1fr 1fr 1fr', md: '1fr 1fr', lg: '1fr 1fr'}} gridGap="8"
         paddingLeft={{base: '0rem', md: '2rem', lg: '4rem'}}>
            <TeamCard image={Gabriela2} name="Gabriela Macagni" description="Matterscale Ventures" />
            <TeamCard image={Fernando} name="Fernando Errandosoro" />
            <TeamCard image={Luis} name="Luis Paolini" />
            <TeamCard image={Santiago} name="Santiago Valles" />
          </Box>
          <Box 
          minWidth="100%"
          display="grid" 
          gridTemplateColumns={{base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'}} 
          gridTemplateRows={{base: '1fr 1fr 1fr', md: '1fr 1fr', lg: '1fr'}} gridGap="8"
          paddingLeft={{base: '0rem', md: '2rem', lg: '4rem'}}
          paddingTop={{base: '1.8rem', md: '2rem', lg: '2rem'}}>
            <TeamCardCollab image={Bautista} name="Bautista Solo" />
            <TeamCardCollab image={Nicolas} name="Nicolas Rodriguez Herrera" />
            <TeamCardCollab image={Marcos} name="Marcos Dedeu" />
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

{/* <Box minWidth="100%"
         display="grid" 
         gridTemplateColumns={{base: '1 fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr'}} 
         gridTemplateRows={{base: '1fr 1fr 1fr', md: '1fr', lg: '1fr'}} gridGap="4"
         paddingLeft="4rem"
         paddingBottom="2rem"> */}