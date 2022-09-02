import { Box, Heading, Text } from "@chakra-ui/react";

function Info() {
   return (
      <Box
         backgroundImage="linear-gradient(to right, rgb(6, 39, 124), rgb(19, 74, 132))"
         display="flex"
         flexDirection={{ base: "column", md: "row", lg: "row" }}
         justifyContent="space-around"
         alignItems="center"
         color="white"
         paddingX="9rem"
         paddingY={{ base: "1rem", md: "2rem", lg: "3rem" }}
         overflow="hidden"
         height={{ base: "auto", md: "15vh", lg: "13vh" }}
      >
         <Box
            display="flex"
            flexDirection={{ base: "column", md: "row", lg: "row" }}
            justifyContent={{ base: "center", md: "space-around", lg: "space-around" }}
            alignItems="center"
            maxWidth="70vw"
         >
            <Box display="flex" flexDirection="column" paddingX={{ base: "0rem", md: "1.6rem", lg: "3rem" }}>
               <Heading textAlign="center">+15</Heading>
               <Text fontSize="lg" fontWeight="500" textAlign="center">
                  STARTUPS
               </Text>
            </Box>
            <Box display="flex" flexDirection="column" paddingX={{ base: "0.6rem", md: "1.6rem", lg: "3rem" }}>
               <Heading textAlign="center">12</Heading>
               <Text fontSize="lg" textAlign="center" fontWeight="500">
                  SEMANAS DE FORMACION
               </Text>
            </Box>
            <Box display="flex" flexDirection="column" paddingX={{ base: "0.6rem", md: "1.6rem", lg: "3rem" }}>
               <Heading textAlign="center">20</Heading>
               <Text fontSize="lg" textAlign="center" fontWeight="500">
                  SPEAKERS DISERTANTES
               </Text>
            </Box>
         </Box>
      </Box>
   );
}

export default Info;
