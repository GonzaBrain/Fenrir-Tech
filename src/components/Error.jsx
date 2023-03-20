import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

const Error = () => {
  return (
    <div>
        <span>Error</span>
        <p> No es posible cargar el contenido por el momento </p> 
        <Link to={"/"}><Button colorScheme='teal' size='lg'>Volver a Inicio</Button></Link>
    </div>
  )
}

export default Error