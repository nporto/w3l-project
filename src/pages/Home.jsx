import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";
import { Link } from "react-scroll";
import logoWhite from "../../Images/logoWhite.png";
import QR2 from "../../Images/QR2.jpeg";

function Home() {
   // background linear-gradient(45deg, rgb(17, 33, 73) 0%, rgb(19, 81, 239) 100%), url(../Images/hero-bg.jpg) center center no-repeat;

   return (
      <Box
         id="home"
         minHeight={{ base: "90vh", md: "85vh", lg: "87vh" }}
         maxWidth="100vw"
         display="flex"
         flexDirection={{ base: "column-reverse", md: "row", lg: "row" }}
         alignItems="center"
         paddingLeft={{ base: "0", md: "0", lg: "10rem" }}
         background="linear-gradient(45deg, rgb(51, 63, 255) 0%, rgb(71, 222, 242) 100%), url(../Images/hero-bg.jpg) center center no-repeat;"
         textAlign={{ base: "center", md: "inherit", lg: "inherit" }}
      >
         <Box
            padding="5rem"
            paddingTop={{ base: "2rem", md: "5rem", lg: "5rem" }}
            width={{ base: "100%", md: "70%", lg: "50%" }}
         >
            <Text marginY={{ base: "1rem", md: "1rem", lg: "1.1rem" }} fontWeight="700" fontSize="1.6rem" color="white">
               Instituto Tecnológico de Buenos Aires
            </Text>
            <Heading color="white" size="4xl" paddingBottom="2rem">
               <Image src={logoWhite} />
            </Heading>

            <Button paddingTop="1.6rem" colorScheme="green" padding="1.6rem" fontSize="1.5rem">
               <Link activeClass="active" to="team" spy={true} smooth={true} offset={-40} duration={500}>
                  Get Started
               </Link>
            </Button>
         </Box>
         <Box
            paddingTop={{ base: "auto", md: "3rem", lg: "auto" }}
            marginRight={{ base: "0%", md: "auto", lg: "auto" }}
            marginTop={{ base: "25%", md: "auto", lg: "auto" }}
            marginLeft={{ base: "50%", md: "auto", lg: "auto" }}
            marginBottom="auto"
            width={{ base: "100%", md: "55%", lg: "50%" }}
         >
            <Image maxWidth={{ base: "50%", md: "260px", lg: "320px" }} height="auto" objectFit="cover" src={QR2} />
         </Box>
      </Box>
   );
}

export default Home;

//maxWidth="50%"

//<Box display="flex"  alignItems="center" paddingLeft="3rem">
//     <UnorderedList position="relative" display="flex" flexDirection="row" styleType="none" alignItems="center" justifyContent="space-around">
//     <ListItem px="0.8rem" color="white" cursor="pointer"><a href="https://twitter.com/ITBAW3LAB" target="_blank"><Image src={Twitter1} /></a></ListItem>
//     <ListItem px="0.8rem" color="white" cursor="pointer"><a href="https://www.linkedin.com/company/itba-w3-lab/?viewAsMember=true" target="_blank"><Image src={Linkedin} /></a></ListItem>
//     <ListItem px="0.8rem" color="white" cursor="pointer"><a href="https://www.itba.edu.ar/" target="_blank"><Image maxHeight="48px" src={logoITBAWhite} /></a></ListItem>
// </UnorderedList>
// </Box>
