import React, { FC } from 'react'
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import meliLogo from '../../assets/meli-logo.png';
import meliLogoLarge from '../../assets/meli-large-logo.png';
import disneyMeli from '../../assets/disney-meli.webp';
import './header.css';

export const Header: FC = () => {
    return (
        <Box className="main-header">
            <nav className="header">
                <Box className='header-1'>
                    <img src={meliLogoLarge} className='logo-desktop' />
                    <img src={meliLogo} className='logo-mobile' />

                    <input 
                        type="text" 
                        name="search"
                        placeholder="Buscar productos, marcas y más..."
                        className="input-header"
                    />
                </Box>
                <img src={disneyMeli} alt="Disney Meli" className="img-disney-header" />
                <Box display='flex'>
                    <span className='menu-icon'><MenuIcon /></span>
                    <span className='menu-icon'><ShoppingCartOutlinedIcon /></span>
                </Box>
            </nav>
        </Box>
    )
}
