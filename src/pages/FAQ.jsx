import {  Box, Heading, Accordion } from '@chakra-ui/react'
import FAQBox from '../components/FAQBox'

function FAQ() {
  //backgroundColor="rgb(51, 63, 255)"
  
  return (
   <Box display="flex" flexDirection="column" id="faq" justifyContent="center" alignItems="center" padding="2rem" paddingTop="3rem" backgroundColor="#0043ce" >
      <Heading textAlign="center" color="white">PREGUNTAS FRECUENTES</Heading>
      <Accordion paddingTop="1.5rem" defaultIndex={[0]} allowMultiple>
            <FAQBox question="¿Cuánto sale la entrada?" answer="Es gratis" />
            <FAQBox question="¿Cuánto sale la entrada?" answer="Es gratis" />
            <FAQBox question="¿Cuánto sale la entrada?" answer="Es gratis" />
            <FAQBox question="¿Cuánto sale la entrada?" answer="Es gratis" />
      </Accordion>
      </Box>
  )
}

export default FAQ