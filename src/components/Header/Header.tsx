import React, { FC, useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { IProduct } from '../../interfaces/Product';
import { Box } from '@mui/material';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import meliLogo from '../../assets/meli-logo.png';
import meliLogoLarge from '../../assets/meli-large-logo.png';
import disneyMeli from '../../assets/disney-meli.webp';
import './header.css';

export const Header: FC = () => {

    const [ userInput, setUserInput ] = useState('');
    const [ products, setProducts ] = useState<IProduct>({});
    const [ focus, setFocus ] = useState<boolean>(false);
    const [ blur, setBlur ] = useState<boolean>(false);

    const navigator = useNavigate();
    const location = useLocation();

    const onChangeInput = ({ target }: any) => {

        setUserInput(target.value);
    }

    const fetchSearch = async () => {
        const url = `https://api.mercadolibre.com/sites/MLC/search?q=${userInput}&limit=6`;

        const resp = await fetch( url );
        const data = await resp.json();

        return setProducts(data);
    }

    const onSubmitSearch = (event: any) => {
        event?.preventDefault();

        if( userInput.length < 1 ) return;

        navigator(`/search/${ userInput }`)
    }

    const handleOnFocus = () => {

        setBlur(false);
        setFocus(true);
    }

    const handleOnBlur = () => {
        
        setBlur(true);
    }

    const onClickLogo = () => {
        setUserInput('');
    }
    

    useEffect(() => {

        fetchSearch();

        window.scrollTo(0, 0);

    }, [ userInput, location.pathname ]);

    return (
        <>
            <Box className="main-header">
                <nav className="header">
                    <Box className='header-1'>
                        <Link to='/' onClick={ onClickLogo }>
                            <img src={meliLogoLarge} className='logo-desktop' />
                            <img src={meliLogo} className='logo-mobile' />
                        </Link>

                        <form 
                            className="search-header"
                            onSubmit={ onSubmitSearch } 

                            onBlur={(e) => {
                                if (!e.currentTarget.contains(e.relatedTarget)) {
                                  handleOnBlur();
                                }
                            }}
                        >
                            <div style={{ display: 'flex', height: '100%' }}>
                                <button
                                    type="submit"
                                    className="search-icon-mobile"
                                >
                                    <AiOutlineSearch />
                                </button>
                                <input 
                                    type="text" 
                                    name="search"
                                    autoComplete='off'
                                    placeholder="Buscar productos, marcas y m??s..."
                                    className="input-header"
                                    onChange={onChangeInput}
                                    value={userInput}
                                    onFocus={(e) => handleOnFocus() }
                                />
                                <button 
                                    type="submit" 
                                    className="search-icon-desktop"
                                >
                                    <AiOutlineSearch />
                                </button>
                            </div>

                            <div className={ blur === false && focus === true ? 'autocomplete' : 'autocomplete-off' }>
                                {
                                    products && products?.results?.filter(producto => producto.title?.toLowerCase().includes(userInput.toLowerCase())).map( producto => (
                                        <Link key={ producto?.id } to={`/search/${ userInput }`}>
                                            <div className="autocomplete-element">
                                                <span style={{ color: '#cecece', paddingRight: 10, paddingTop: 3 }}><FiSearch /></span>
                                                <p className='text-autocomplete'>{producto?.title?.substring(0, 40) + '...'}</p>
                                            </div>
                                        </Link>
                                    ))
                                }

                            </div>
                        </form>
                    </Box>
                    <img src={disneyMeli} alt="Disney Meli" className="img-disney-header" />
                    <Box display='flex'>
                        <span className='menu-icon'  style={{ fontSize: '1.2rem' }}><AiOutlineMenu /></span>
                        <span className='menu-icon'  style={{ fontSize: '1.2rem' }}><FiShoppingCart /></span>
                    </Box>
                </nav>
            </Box>
            

            <Box className="header-2-mobile">
                <Box sx={{ marginLeft: '0px', display: 'flex' }}>
                    <span style={{ fontSize: 20, paddingRight: 5}}>
                        <IoLocationOutline />
                    </span>
                    <Box sx={{ lineHeight: '25px' }}>
                        <p style={{ color: '#333', fontSize: '0.85rem', margin: '0' }}>Enviar a David Medellin, Antioquia</p>
                    </Box>
                </Box>
                <span style={{ color: '#aeabab', lineHeight: 2, cursor: 'pointer' }}>
                    <BiChevronRight />
                </span>
            </Box>

            <Box className="second-header">
                <Box className="second-header-main">
                    <Box className="header-2">
                        <Box sx={{ width: '140px', marginLeft: '0px', display: 'flex' }}>
                            <span style={{ fontSize: 25 , paddingRight: 3}}>
                                <IoLocationOutline />
                            </span>
                            <Box sx={{ lineHeight: '15px' }}>
                                <p style={{ color: '#595858 ', fontSize: '0.75rem', margin: '0' }}>Enviar a David</p>
                                <p style={{ color: '#333', fontSize: '0.85rem', margin: '0' }}>Med, Antioq...</p>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="header-3" > 
                        <p style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>Categorias <BiChevronDown /></p>
                        <p>Ofertas</p>
                        <p>Historial</p>
                        <p>Supermercado</p>
                        <p>Vender</p>
                        <p>Ayuda/PQR</p>
                    </Box>

                    <Box className="header-4" paddingLeft={10}>
                        <Box display="flex" alignItems='center' paddingLeft={3} >
                            <span style={{ fontSize: 20}}><AiOutlineUser /></span>
                            <p style={{ paddingLeft: 2, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>David <BiChevronDown /></p>
                        </Box>
                        <p>Mis compras</p>
                        <span style={{ fontSize: 15, cursor: 'pointer', padding: '0 10px'}}><IoIosNotificationsOutline /></span>
                        <span style={{ fontSize: 15, cursor: 'pointer'}}><FiShoppingCart /></span>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
