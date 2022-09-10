import React, { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { IProductId } from '../../interfaces/ProductId';

import visa from '../../assets/logos-credit-cards/visa.png';
import mcard from '../../assets/logos-credit-cards/mcard.png';
import amexpress from '../../assets/logos-credit-cards/amexpress.jpg';

import { TbAward, TbTruckDelivery } from 'react-icons/tb';
import { IoReturnDownBackOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';
import { BiChevronDown, BiMedal } from "react-icons/bi";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

import './details-product.css';
import { AiOutlineTrophy } from 'react-icons/ai';
import { FcBusinessman } from 'react-icons/fc';
import { ISellerId } from '../../interfaces/SellerId';

export const DetailsProductId: FC = () => {

    const [ like, setLike ] = useState<boolean>(false);

    const location = useLocation();
    const locationSplit = location.pathname.split('/product/')[1];

    const { data } = useFetch<IProductId>(`https://api.mercadolibre.com/items/${ locationSplit }`);

    const { data: seller } = useFetch<ISellerId>(`https://api.mercadolibre.com/users/${ data?.seller_id }`);
    console.log('user: ', seller)

    const onLikeProduct = () => {
        setLike(true);
        localStorage.setItem('likeProduct', 'true');
    }

    const onDislikeProduct = () => {
        setLike(false);
        localStorage.setItem('likeProduct', 'false');
    }

    return (
        <div>
            <div className="product-info">
                <p className="condition-product">{ data?.condition === 'new' ? 'Nuevo' : 'Reacondicionado' } | { data?.sold_quantity } vendidos</p>
                <div className="container-title">
                    <h1 className="title-product">{ data?.title?.substring(0, 50) }</h1>
                    <span style={{ color: '#2a70d9', fontSize: 23, cursor: 'pointer' }}>{like || localStorage.getItem('likeProduct') == 'true' ? <MdFavorite onClick={ onDislikeProduct } /> : <MdOutlineFavoriteBorder onClick={ onLikeProduct } />}</span>
                </div>
                <del>{ data?.original_price! > data?.price! ? `$ ${data?.original_price}` : null }</del>
                <p className="price-product">$ { data?.price }</p>
                <p style={{ lineHeight: '1px', marginTop: 12 }}>Hasta 48 cuotas</p>
                <div className="logos-credit-cards">
                    <img className="logo-visa" src={visa} alt="Visa" />
                    <img className="logo-amexpress" src={amexpress} alt="American Express" />
                    <img className="logo-mcard" src={mcard} alt="Master Card" />
                </div>
                <p className="more-info">Más información</p>

                <div className="deliver-info">
                    <span><TbTruckDelivery /></span>
                    <p>Llega gratis el miercoles</p>
                </div>
                <p className="others-forms-receive">Ver más formas de entrega</p>

                <div className="return-free">
                    <span><IoReturnDownBackOutline /></span>
                    <p>Devolución gratis</p>
                </div>
                <p className="return-deliver">Tienes 30 días desde que lo recibes.</p>
                <p className="more-info-two">Conocer más</p>

                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <p>Cantidad: <span style={{ fontWeight: 600 }}>1 unidad</span></p>
                    <span className="quantity"><BiChevronDown /></span>
                </div>

                <button className="btn-buy-now">Comprar ahora</button>
                <button className="btn-add-to-cart">Agregar al carrito</button>

                <div className="alert-buy">
                    <span className="icon-alert-buy">
                        <AiOutlineTrophy />
                    </span>
                    <div className="content-alert-buy">
                        <p>Cómpralo, sube de nivel y ahorra 15% en tus envíos</p>
                        <p style={{ marginTop: -10 }}>Es tu próximo beneficio de Mercado Puntos</p>
                    </div>
                </div>

                <div className="protected-buy">
                    <span style={{ marginTop: '14px', marginRight: '10px' }}>
                        <IoShieldCheckmarkOutline />
                    </span>
                    <p style={{ color: '#2a70d9', fontSize: '14px' }}>Compra Protegida<span style={{ color: '#000', fontWeight: 300 }}>, recibe el producto que esperabas o te devolvemos tu dinero.</span></p>
                </div>

                <div className="protected-buy">
                    <span style={{ marginTop: '18px', marginRight: '10px' }}>
                        <AiOutlineTrophy />
                    </span>
                    <p style={{ color: '#2a70d9', fontSize: '14px' }}>Mercado Puntos<span style={{ color: '#000', fontWeight: 300 }}>. Sumas 287 puntos</span></p>
                </div>

                <div className="protected-buy">
                    <span style={{ marginTop: '18px', marginRight: '10px' }}>
                        <TbAward />
                    </span>
                    <p style={{ color: '#000', fontWeight: 300, marginBottom: 35, fontSize: '14px', marginTop: '17px' }}>30 días de garantía de fábrica.</p>
                </div>
            </div>

            <div className="seller-info">
                <p>Información sobre el vendedor</p>

                <div className="seller-name-container">
                    <span className="seller-icon">
                        <FcBusinessman />
                    </span>
                    <div className="seller-title">
                        <p>{ seller?.nickname }</p>
                        <p>Tienda oficial de Mercado Libre</p>
                    </div>
                </div>

                <div style={{ display: 'flex' }}>
                    <span style={{ color: '#00a650', marginTop: 18 }}>
                        <BiMedal />
                    </span>
                    <div>
                        <p style={{ color: '#00a650', fontWeight: 500, fontSize: 16}}>MercadoLíder Platinum</p>
                        <p style={{ color: '#666', fontWeight: 300, fontSize: 14, marginTop: -18, marginLeft: -1}}>¡Es uno de los mejores del sitio!</p>
                    </div>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    )
}
