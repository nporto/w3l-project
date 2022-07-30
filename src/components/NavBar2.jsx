import { useState } from 'react'
import { UnorderedList, Box, ListItem, Heading, Image } from '@chakra-ui/react'
import './NavBar2.css'
import Twitter1 from '../../Images/Twitter32.png'
import Ig1 from '../../Images/Ig32.png'

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
   zIndex="997"
   //Change background color
   >
         <Box><Heading cursor="pointer" paddingRight="16rem" color="white" size="xl"><a href="#home">W3Lab</a></Heading></Box>
         <Box cursor="pointer" height="100%" display="block" background>
            <a className="toggle-button" onClick={() => {
            setNavBarActive(!navBarActive)
            }}>
                  <span cursor="pointer" className="bar"></span>
                  <span cursor="pointer" className="bar"></span>
                  <span cursor="pointer" className="bar"></span>
            </a>
         </Box>
         <Box 
         display={{sm: '', lg: "flex"}} 
         flexDirection={{sm: '', lg: 'row'}} 
         justifyContent={{sm: '', lg: 'center'}} 
         alignItems={{sm: '', lg: 'center'}} 
         className={navBarActive ? 'navbar-links active' : 'navbar-links'}>
            <UnorderedList position="relative" display="flex" flexDirection="row" styleType="none" alignItems="center" justifyContent="space-between">
                        <ListItem color="white" cursor="pointer"><Heading size="md"><a href="#home">Home</a></Heading></ListItem>
                        <ListItem px="0.8rem" color="white" cursor="pointer"><Heading size="md"><a href="#about">About</a></Heading></ListItem>
                        <ListItem px="0.8rem" color="white" cursor="pointer"><Heading size="md"><a href="#team">Team</a></Heading></ListItem>   
                        <ListItem px="0.8rem" color="white" cursor="pointer"><Heading size="md"><a href="#sponsors">Sponsors y colaboraciones</a></Heading></ListItem>
                        <ListItem px="0.8rem" color="white" cursor="pointer"><Image src={Twitter1} /></ListItem>
                        <ListItem px="0.8rem" color="white" cursor="pointer"><Image src={Ig1} /></ListItem>
                  </UnorderedList>
         </Box>
   </Box>
  )
}

export default MainNavBar
      
     