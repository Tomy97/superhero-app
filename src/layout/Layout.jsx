import React from 'react'
import { Container } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Container container >
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default Layout