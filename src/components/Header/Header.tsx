import React, { FC, useEffect, useState } from 'react'
import { Box } from '@mui/material';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { BiChevronDown } from 'react-icons/bi';
import meliLogo from '../../assets/meli-logo.png';
import meliLogoLarge from '../../assets/meli-large-logo.png';
import disneyMeli from '../../assets/disney-meli.webp';
import './header.css';
import { IProduct } from '../../interfaces/Product';

export const Header: FC = () => {

    const [ userInput, setUserInput ] = useState('');
    const [ products, setProducts ] = useState<IProduct>({});

    const onChangeInput = ({ target }: any) => {
        //if( target.value <= 1 ) return;

        setUserInput(target.value);
    }

    const fetchSearch = async () => {
        const url = `https://api.mercadolibre.com/sites/MLC/search?q=${userInput}`;

        const resp = await fetch( url );
        const data = await resp.json();

        console.log(data)
        return setProducts(data);
    }

    useEffect(() => {
        fetchSearch();

    }, [userInput])

    console.log('products: ', products)
    
    return (
        <>
            <Box className="main-header">
                <nav className="header">
                    <Box className='header-1'>
                        <img src={meliLogoLarge} className='logo-desktop' />
                        <img src={meliLogo} className='logo-mobile' />

                        <form className="search-header">
                            <span className="search-icon-mobile"><AiOutlineSearch /></span>
                            <input 
                                type="text" 
                                name="search"
                                placeholder="Buscar productos, marcas y más..."
                                className="input-header"
                                onChange={onChangeInput}
                                value={userInput}
                            />
                            <span className="search-icon-desktop"><AiOutlineSearch /></span>
                        </form>
                    </Box>
                    <img src={disneyMeli} alt="Disney Meli" className="img-disney-header" />
                    <Box display='flex'>
                        <span className='menu-icon'><AiOutlineMenu /></span>
                        <span className='menu-icon'><FiShoppingCart /></span>
                    </Box>
                </nav>
            </Box>

            <Box className="second-header">
                <Box className="second-header-main">
                    <Box className="header-2">
                        <Box sx={{ width: '140px', marginLeft: '0px', display: 'flex' }}>
                            <span style={{ fontSize: 25 , paddingRight: 5}}>
                                <IoLocationOutline />
                            </span>
                            <Box sx={{ lineHeight: '15px' }}>
                                <p style={{ color: '#636363 ', fontSize: '0.75rem', margin: '0' }}>Enviar a David</p>
                                <p style={{ color: '#333', fontSize: '0.85rem', margin: '0' }}>Med, Antioq...</p>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="header-3">
                        <p style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>Categorias <BiChevronDown /></p>
                        <p>Ofertas</p>
                        <p>Historial</p>
                        <p>Supermercado</p>
                        <p>Moda</p>
                        <p>Vender</p>
                        <p>Ayuda/PQR</p>
                    </Box>

                    <Box className="header-4">
                        <Box display="flex" alignItems='center' paddingRight={3}>
                            <span><AiOutlineUser /></span>
                            <p style={{ paddingLeft: 2, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>David <BiChevronDown /></p>
                        </Box>
                        <p>Mis compras</p>
                        <p style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>Favoritos <BiChevronDown /></p>
                        <span><IoIosNotificationsOutline /></span>
                        <span><FiShoppingCart /></span>
                    </Box>
                </Box>
            </Box>
            <Box className="autocomplete">
                {
                    products && products?.results?.filter(producto => producto.title?.toLowerCase().includes(userInput.toLowerCase())).map( producto => (
                        <>
                            <p>{producto?.title}</p>
                        </>
                    ))
                }
            </Box>
        </>
    )
}
