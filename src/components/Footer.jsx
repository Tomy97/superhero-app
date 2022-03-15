import { Typography } from '@mui/material'
import React from 'react'
import { FooterContainer } from '../styles-components/Footer'

const Footer = () => {
  const name = 'Tomas Pandullo'
  return (
    <>
      <FooterContainer>
        <Typography variant="h6" style={{ color: 'white', textAlign: 'center' }} gutterBottom component="div">
          Pagina hecha por { name }
        </Typography>
      </FooterContainer>
    </>
  )
}

export default Footer