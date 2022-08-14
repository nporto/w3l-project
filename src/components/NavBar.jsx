import { useState } from 'react'
import { UnorderedList, Box, ListItem, Heading, Image } from '@chakra-ui/react'
import { Link } from 'react-scroll'
import './NavBar.css'
import Twitter1 from '../../Images/Twitter32.png'
import Linkedin from '../../Images/Linkedin32.png'
import logoWhite from '../../Images/logoWhite.png'
import logoITBAWhite from '../../Images/logoITBAWhite.png'

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
   backgroundColor={{ base: 'rgba(8, 34, 46,0.8)', md: 'inherit' }}
   className={colorChange ? 'navbar colorChange' : 'navbar'}
   display={{sm: 'block', md: 'flex', lg: 'flex'}}
   flexDirection={{sm: 'auto', md: 'column', lg: 'row'}}
   position="fixed" 
   top="0" 
   right="0" 
   left="0" 
   justifyContent="space-around" 
   alignItems="center"
   boxSizing="border-box"
   transition="all 0.5s"
   zIndex="997"
   >
         <Box><Heading cursor="pointer" paddingRight="16rem" color="white" size="xl"><Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}><Image maxHeight={{base: '36px', md: '42px', lg: '48px'}} src={logoWhite} /></Link></Heading></Box>
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
         display={{sm: '', md: 'flex', lg: "flex"}} 
         flexDirection={{sm: '', md: 'row', lg: 'row'}} 
         justifyContent={{sm: '',md: 'center', lg: 'center'}} 
         alignItems={{sm: '', md: 'center', lg: 'center'}} 
         className={navBarActive ? 'navbar-links active' : 'navbar-links'}>
            <UnorderedList position="relative" display="flex" flexDirection="row" styleType="none" alignItems="center" justifyContent="space-between">
                        <ListItem color="white" cursor="pointer"><Heading size="md"><Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link></Heading></ListItem>
                        <ListItem px="0.8rem" color="white" cursor="pointer"><Heading size="md"><Link activeClass="active" to="team" spy={true} smooth={true} offset={-58} duration={500}>Team</Link></Heading></ListItem> 
                        <ListItem px="0.8rem" color="white" cursor="pointer"><Heading size="md"><Link activeClass="active" to="speakers" spy={true} smooth={true} offset={-58} duration={500}>Speakers</Link></Heading></ListItem>  
                        <ListItem px="0.8rem" color="white" cursor="pointer"><Heading size="md"><Link activeClass="active" to="sponsors" spy={true} smooth={true} offset={-58} duration={500}>Partners</Link></Heading></ListItem>
                        <ListItem px="0.8rem" color="white" cursor="pointer"><Heading size="md"><Link activeClass="active" to="faq" spy={true} smooth={true} offset={-58} duration={500}>FAQ</Link></Heading></ListItem>
                        <ListItem px="0.8rem" color="white" cursor="pointer"><a href="https://twitter.com/ITBAW3LAB" target="_blank"><Image src={Twitter1} /></a></ListItem>
                        <ListItem px="0.8rem" color="white" cursor="pointer"><a href="https://www.linkedin.com/company/itba-w3-lab/?viewAsMember=true" target="_blank"><Image src={Linkedin} /></a></ListItem>
                        <ListItem px="0.8rem" color="white" cursor="pointer"><a href="https://www.itba.edu.ar/" target="_blank"><Image maxHeight="48px" src={logoITBAWhite} /></a></ListItem>
            </UnorderedList>
         </Box>
   </Box>
  )
}

export default MainNavBar
      
     