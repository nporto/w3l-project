import {  Box, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Image } from '@chakra-ui/react'
import FAQLogo from '../../Images/faq.png'

function FAQBox(props) {

//<Box id="faq" display= 'block' content= " " margin-top= '-80px' height= '80px' visibility= 'hidden' pointerEvents= 'none'></Box>

  return (
      <AccordionItem 
      borderRadius="0.6rem" 
      backgroundColor="white" 
      padding="0.2rem" 
      display="flex"
      flexDirection="column"
      minWidth="60vw"
      marginBottom="1rem">
            <h2>
                  <AccordionButton
                  display="flex"   
                  flexDirection="row" 
                  alignItems="center">
                        <Image src={FAQLogo} padding="1rem" />
                        <Box flex='1' textAlign='left'>
                        {props.question}
                        </Box>
                        <AccordionIcon />
                  </AccordionButton>
            </h2>
            <AccordionPanel paddingLeft="3rem" pb={4}>
            {props.answer}
            </AccordionPanel>
      </AccordionItem>
  )
}

export default FAQBox