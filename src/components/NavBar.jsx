import { useState } from 'react'
import { UnorderedList, Box, ListItem, Heading } from '@chakra-ui/react'
import './NavBar.css'

function MainNavBar() {

      const [colorChange, setColorchange] = useState(false);

      const changeNavbarColor = () =>{
            if(window.scrollY >= 80){
              setColorchange(true);
            }
            else{
              setColorchange(false);
            }
         };

         window.addEventListener('scroll', changeNavbarColor);

  return (
   <Box 
   className={colorChange ? 'navbar colorChange' : 'navbar'}
   display="block" 
   position="fixed" 
   top="0" 
   right="0" 
   left="0" 
   justifyContent="space-around" 
   color="yellow.500" 
   alignItems="center"
   boxSizing="border-box"
   transition="all 0.5s"
   //Change background color
   >
         <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <Heading cursor="pointer" paddingRight="16rem" color="white" size="xl">W3L</Heading>
                  <UnorderedList position="relative" display="flex" flexDirection="row" styleType="none" alignItems="center" justifyContent="space-between">
                        <ListItem color="rgb(161, 168, 161)" cursor="pointer"><Heading size="md">Home</Heading></ListItem>
                        <ListItem px="0.8rem" color="rgb(161, 168, 161)" cursor="pointer"><Heading size="md"><a href="#about">About</a></Heading></ListItem>
                        <ListItem px="0.8rem" color="rgb(161, 168, 161)" cursor="pointer"><Heading size="md">Team</Heading></ListItem>
                        <ListItem px="0.8rem" color="rgb(161, 168, 161)" cursor="pointer"><Heading size="md">Inscripciones</Heading></ListItem>
                        <ListItem px="0.8rem" color="rgb(161, 168, 161)" cursor="pointer"><Heading size="md">Sponsors y colaboraciones</Heading></ListItem>
                        <ListItem px="0.8rem" color="rgb(161, 168, 161)" cursor="pointer">IG</ListItem>
                        <ListItem px="0.8rem" color="rgb(161, 168, 161)" cursor="pointer">TW</ListItem>
                  </UnorderedList>
         </Box>
      
   </Box>
  )
}

export default MainNavBar
      
      