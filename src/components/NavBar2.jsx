import { useState } from 'react'
import { UnorderedList, Box, ListItem, Heading } from '@chakra-ui/react'
import './NavBar2.css'

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

         const [navBarActive, setNavBarActive] = useState(false)
          
  return (
   <Box 
   className={colorChange ? 'navbar colorChange' : 'navbar'}
   display={{sm: 'block', lg: 'flex'}}
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
         <Box><Heading cursor="pointer" paddingRight="16rem" color="white" size="xl"><a href="#home">W3L</a></Heading></Box>
         <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <a href="#" className="toggle-button" onClick={() => {
            setNavBarActive(!navBarActive)
            }}>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
            </a>
         </Box>
         <Box 
         display={{sm: '', lg: "flex"}} 
         flexDirection={{sm: '', lg: 'row'}} 
         justifyContent={{sm: '', lg: 'center'}} 
         alignItems={{sm: '', lg: 'center'}} 
         className={navBarActive ? 'navbar-links active' : 'navbar-links'}>
            <UnorderedList position="relative" display="flex" flexDirection="row" styleType="none" alignItems="center" justifyContent="space-between">
                        <ListItem color="rgb(161, 168, 161)" cursor="pointer"><Heading size="md"><a href="#home">Home</a></Heading></ListItem>
                        <ListItem px="0.8rem" color="rgb(161, 168, 161)" cursor="pointer"><Heading size="md"><a href="#about">About</a></Heading></ListItem>
                        <ListItem px="0.8rem" color="rgb(161, 168, 161)" cursor="pointer"><Heading size="md"><a href="#team">Team</a></Heading></ListItem>   
                        <ListItem px="0.8rem" color="rgb(161, 168, 161)" cursor="pointer"><Heading size="md"><a href="#sponsors">Sponsors y colaboraciones</a></Heading></ListItem>
                        <ListItem px="0.8rem" color="rgb(161, 168, 161)" cursor="pointer">IG</ListItem>
                        <ListItem px="0.8rem" color="rgb(161, 168, 161)" cursor="pointer">TW</ListItem>
                  </UnorderedList>
         </Box>
   </Box>
  )
}

export default MainNavBar
      
     