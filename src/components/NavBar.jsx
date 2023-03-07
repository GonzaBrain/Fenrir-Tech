import React from 'react';
import CartWidget from './CartWidget'; 
import { Button, MenuButton, MenuItem, Menu, MenuList, Flex, Spacer, Box} from '@chakra-ui/react';

const NavBar = () => {
  return (
    <div>
      {/*
      
      */}
  
  
  
  <Flex>
  <Box p='3'>
  <h3>Fenrir-Tech</h3>
  </Box>

  <Spacer />

    <Box p='5'>
      <Menu>
  <MenuButton as={Button}>Categorias</MenuButton>
  <MenuList>
    <MenuItem>Componentes</MenuItem>
    <MenuItem>Perifericos</MenuItem>
    <MenuItem>Monitores</MenuItem>
  </MenuList> 
</Menu>
    </Box>

  <Spacer />
  <Box p='3'>
  <CartWidget/>
  </Box>
</Flex>
  
  
  
  
  
  
  </div> 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 )
}

export default NavBar