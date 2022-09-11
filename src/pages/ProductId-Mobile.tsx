import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { IProductId } from '../interfaces/ProductId';
import { IDescriptionProductId } from '../interfaces/DescriptionProductId';
import { ISellerId } from '../interfaces/SellerId';

import goodSAC from '../assets/qualify-shops/message-positive.svg';
import goodDeliverTime from '../assets/qualify-shops/time-positive.svg';

import { TbShare, TbTruckDelivery, TbAward } from 'react-icons/tb';
import { IoReturnDownBackOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';
import { FcNext, FcBusinessman } from 'react-icons/fc';
import { AiOutlineTrophy } from 'react-icons/ai';
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { BiMedal } from 'react-icons/bi';

import '../components/pages/ProductId-Mobile.css'

export const ProductIdMobile = () => {

    const [ like, setLike ] = useState<boolean>(false);

    const locationSplit = location.pathname.split('/product/')[1];

    const { data, isLoading, hasError } = useFetch<IProductId>(`https://api.mercadolibre.com/items/${ locationSplit }`);

    const { data: description } = useFetch<IDescriptionProductId>(`https://api.mercadolibre.com/items/${ locationSplit }/description`);

    const { data: seller } = useFetch<ISellerId>(`https://api.mercadolibre.com/users/${ data?.seller_id }`);

    const onLikeProduct = () => {
        setLike(true);
        localStorage.setItem('likeProduct', 'true');
    }

    const onDislikeProduct = () => {
        setLike(false);
        localStorage.setItem('likeProduct', 'false');
    }

    return (
        <div className="general-container-mobile">
            <div className="container-data-product">
                <p className="condition-product">
                    { data?.condition === 'new' ? 'Nuevo' : 'Reacondicionado' } | { data?.sold_quantity } vendidos
                </p>
                <h1 className="title-product">{ data?.title?.substring(0, 50) }</h1>
                <p className="length-imgs">1/{ data?.pictures?.length }</p>
                <img className="product-image-mobile" src={data?.pictures?.[0].url} alt={data?.title} />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <span className="share-icon">
                        <TbShare />
                    </span>
                </div>
                <p className="price-product-mobile" style={{ marginTop: 60 }}>$ { data?.price }</p>
                <p style={{ lineHeight: '1px', marginTop: 12, marginLeft: '40px' }}>Hasta 48 cuotas</p>
                <p className="more-info" style={{ marginLeft: '40px', marginTop: -5 }}>Más información</p>

                <div className="deliver-info-mobile">
                    <span><TbTruckDelivery /></span>
                    <p>Llega gratis el miercoles</p>
                </div>
                <p className="others-forms-receive-mobile">Ver más formas de entrega</p>

                <div className="return-free-mobile">
                    <span><IoReturnDownBackOutline /></span>
                    <p>Devolución gratis</p>
                </div>
                <p className="return-deliver-mobile">Tienes 30 días desde que lo recibes.</p>
                <p className="more-info-two-mobile">Conocer más</p>

                <button className="btn-quantity">
                    <p style={{ fontWeight: 400 }}>Cantidad: <span style={{ fontWeight: 700 }}>1</span></p>
                    <span>
                        <FcNext />
                    </span>
                </button>
                <button className="btn-buy-now">Comprar ahora</button>
                <button className="btn-add-to-cart">Agregar al carrito</button>

                <div className="alert-buy">
                    <span className="icon-alert-buy-mobile">
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
                    <span style={{ marginTop: '5px', marginRight: '10px' }}>
                        <AiOutlineTrophy />
                    </span>
                    <p style={{ color: '#2a70d9', fontSize: '14px', marginTop: '5px', }}>Mercado Puntos<span style={{ color: '#000', fontWeight: 300 }}>. Sumas 287 puntos</span></p>
                </div>

                <div className="protected-buy">
                    <span style={{ marginTop: '5px', marginRight: '10px' }}>
                        <TbAward />
                    </span>
                    <p style={{ color: '#000', fontWeight: 300, marginBottom: 35, fontSize: '14px', marginTop: '5px' }}>30 días de garantía de fábrica.</p>
                </div>

                <div className="share-like-container">
                    <div>
                        <span style={{ color: '#2a70d9', fontSize: 23, cursor: 'pointer' }}>{like || localStorage.getItem('likeProduct') == 'true' ? <MdFavorite onClick={ onDislikeProduct } /> : <MdOutlineFavoriteBorder onClick={ onLikeProduct } />}</span>
                        <p>Agregar a favoritos</p>
                    </div>
                    <div>
                        <span className="share-icon-two">
                            <TbShare />
                        </span>
                        <p>Compartir</p>
                    </div>
                </div>
            </div>

            <div style={{ borderBottom: '1px solid rgba(0,0,0, 0.1)', width: '100%' }} />

            <div className="seller-info-mobile">
                <p>Información sobre el vendedor</p>

                <div className="seller-name-container">
                    <span className="seller-icon">
                        <FcBusinessman />
                    </span>
                    <div className="seller-title">
                        <p>{ seller?.nickname ? seller?.nickname : 'Mercado Libre' }</p>
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

                <div className="container-qualities">
                    <div className="quality-one"></div>
                    <div className="quality-two"></div>
                    <div className="quality-three"></div>
                    <div className="quality-four"></div>
                    <div className="quality-five"></div>
                </div>

                <div className="reputation-shops">
                    <div>
                        <h3>{ seller?.seller_reputation?.transactions?.completed || 245 }</h3>
                        <p>Ventas en los últimos 365 días</p>
                    </div>
                    <div>
                        <img width={30} src={ goodSAC } alt="Good customer service" />
                        <p>Brinda buena atención</p>
                    </div>
                    <div>
                        <img width={30} src={ goodDeliverTime } alt="Good deliver time" />
                        <p>Entrega sus productos a tiempo</p>
                    </div>
                </div>

                <p className="more-info-seller" style={{ fontSize: '14px', fontWeight: 500 }}>Ver más datos de este vendedor</p>
            </div>

        </div>
    )
}
