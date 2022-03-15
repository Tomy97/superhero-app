import { Typography } from '@mui/material'
import React from 'react'
import { FooterContent, FooterClass, TextH3 } from '../styles-components/Footer'

const Footer = () => {
  const name = 'Tomas Pandullo'
  return (

    <FooterContent>
      <FooterClass>
        <TextH3>
          Pagina hecha por {name}
        </TextH3>
      </FooterClass>
    </FooterContent>

  )
}

export default Footer