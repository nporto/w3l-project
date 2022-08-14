import {  Box, Heading } from '@chakra-ui/react'
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
import Card from '../components/SpeakersCard'


// a1a8a1
function Speakers() {

  return (
   <Box padding="2rem" paddingTop="3rem" backgroundColor="rgb(249, 248, 255)" id="speakers">
         <Heading padding="1rem">Speakers</Heading>
         <Box display="flex" justifyContent="center" alignItems="center" width="100%">
            <Box 
            position="relative" 
            display="grid" 
            gridTemplateColumns={{base: '1 fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr'}} 
            gridTemplateRows={{base: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr', lg: '1fr 1fr 1fr'}} 
            gridGap="5">
                  <Card image={Julian} name="Julian Neuss" description="Co-Founder & CEO - Fanz" twLink="#" igLink="https://www.instagram.com/julianjneuss/" linkedLink="https://www.linkedin.com/in/jneuss/?originalSubdomain=ar" />
                  <Card image={Tomas} name="Tomás Soracco" description="POAP Co-Founder" twLink="#" igLink="#" linkedLink="https://www.linkedin.com/in/tom%C3%A1s-soracco-192604128/" />
                  <Card image={Pablo} name="Pablo Sabatella" description="DefyEducation" twLink="https://twitter.com/PabloSabbatella" igLink="https://www.instagram.com/pablosabbatella/?hl=es" linkedLink="https://www.linkedin.com/in/psabbatella/" />
                  <Card image={Nicolas} name="Nicolas Earnshaw" description="Decentraland" twLink="https://twitter.com/nicoearnshaw" igLink="#" linkedLink="https://www.linkedin.com/in/nicolas-earnshaw-6230a36/" />
                  <Card image={Yemel} name="Yemel Jardi" description="Ingeniero Informatico - ITBA" twLink="https://twitter.com/yemeljardi?lang=es" igLink="https://www.instagram.com/yimi_drone/" linkedLink="https://www.linkedin.com/in/yemel/" />
                  <Card image={Martin} name="Martin Nagelberg" description="Co-Founder & CTO - Tienda Dolar" twLink="#" igLink="#" linkedLink="https://www.linkedin.com/in/martin-nagelberg/" />
                  <Card image={Manuel} name="Manuel Araoz" description="Founder OpenZeppelin" twLink="#" igLink="#" linkedLink="https://www.linkedin.com/in/manuelaraoz/" />
                  <Card image="" name="Ariel Scaliter" description="Agrotoken" twLink="#" igLink="#" linkedLink="#" />
                  <Card image={Nicolas2} name="Nicolas D'onofrio" description="Co-Founder Tienda Dolar" twLink="#" igLink="#" linkedLink="https://www.linkedin.com/in/nicdonofrio/" />
                  <Card image={Gabriela} name="Gabriela Macagni" description="Matterscale Ventures" twLink="#" igLink="#" linkedLink="https://www.linkedin.com/in/gabriela-macagni-9716968/" />
                  <Card image="" name="Alfonso Amat" description="AWS" twLink="#" igLink="#" linkedLink="https://www.linkedin.com/in/alfonsoamat/" />
            </Box>
         </Box>
         
   </Box>
  )
}

export default Speakers