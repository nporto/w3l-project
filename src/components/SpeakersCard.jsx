import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Heading, Text, Image, useMediaQuery } from "@chakra-ui/react";
import Twitter2 from "../../Images/Twitter24.png";
import Ig2 from "../../Images/Ig24.png";
import Linkedin from "../../Images/linkedin24.png";

function SpeakersCard(props) {
   const [displayContactInfo, setDisplayContactInfo] = useState(false);
   const [isLargerThanSm] = useMediaQuery("(min-width: 30em)");

   const handleMouseOver = () => {
      setDisplayContactInfo(true);
   };

   const handleMouseOut = () => {
      setDisplayContactInfo(false);
   };

   return (
      <Box
         position="relative"
         onMouseOver={handleMouseOver}
         onMouseOut={handleMouseOut}
         as={motion.div}
         initial={{ opacity: 0, x: -50, y: -50 }}
         whileInView={isLargerThanSm ? props.whileInViewDesktop : props.whileInViewMobile}
         viewport={{ once: true }}
      >
         <Image maxWidth="300px" src={props.image} borderRadius="0.4rem" />
         <Box
            color="white"
            position="absolute"
            bottom="0"
            textAlign="center"
            width="100%"
            background="rgba(6, 12, 34, 0.76)"
         >
            <Heading size="lg">{props.name}</Heading>
            <Text fontWeight="400" fontSize="lg" paddingBottom={displayContactInfo ? "0rem" : "0.7rem"}>
               {props.description}
            </Text>
            {displayContactInfo && (
               <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding="0.4rem">
                  <Box cursor="pointer">
                     <a target="_blank" href={props.twLink}>
                        <Image src={Twitter2} />
                     </a>
                  </Box>
                  <Box cursor="pointer" paddingX="1rem">
                     <a target="_blank" href={props.igLink}>
                        <Image src={Ig2} />
                     </a>
                  </Box>
                  <Box cursor="pointer">
                     <a target="_blank" href={props.linkedLink}>
                        <Image src={Linkedin} />
                     </a>
                  </Box>
               </Box>
            )}
         </Box>
      </Box>
   );
}

export default SpeakersCard;
