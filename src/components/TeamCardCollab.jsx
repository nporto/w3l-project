import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Twitter2 from "../../Images/Twitter24.png";
import Ig2 from "../../Images/Ig24.png";
import Linkedin from "../../Images/linkedin24.png";

function TeamCardCollab(props) {
   return (
      <Box
         as={motion.div}
         initial={{ opacity: 0, x: -75 }}
         whileInView={{ x: 0, opacity: 1, transition: { duration: 1, delayChildren: 0.5 } }}
         viewport={{ once: true }}
         background="rgb(71, 222, 242)"
         maxWidth={{ base: "100%", lg: "90%" }}
         color="white"
         borderRadius="1rem"
         display="flex"
         flexDirection="row"
         textAlign="center"
         position="relative"
      >
         <Image maxWidth="50%" height="auto" objectFit="cover" borderRadius="1rem" src={props.image} />
         <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            paddingLeft={{ base: "0rem", md: "1rem", lg: "1rem" }}
         >
            <Heading fontSize={{ base: "24px", md: "xl", lg: "2xl" }}>{props.name}</Heading>
            <Text fontSize={{ base: "15px", md: "lg", lg: "xl" }} fontWeight="500">
               {props.description}
            </Text>
         </Box>
      </Box>
   );
}

export default TeamCardCollab;
