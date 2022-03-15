import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarContent } from '../styles-components/Navbar'
import Typography from '@mui/material/Typography';


const Header = () => {
    return (
        <NavbarContent>
            <Typography variant="h5" style={{ color: 'white', textAlign: 'center' }} gutterBottom component="div">
                SuperHero App
            </Typography>
            <Link to="/login" style={{ textDecoration: 'none', color: 'white' }} >Login</Link>
        </NavbarContent>
    )
}

export default Header