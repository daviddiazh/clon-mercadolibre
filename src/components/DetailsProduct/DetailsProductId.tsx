import React, { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { IProductId } from '../../interfaces/ProductId';
import { ISellerId } from '../../interfaces/SellerId';

import visa from '../../assets/logos-credit-cards/visa.png';
import mcard from '../../assets/logos-credit-cards/mcard.png';
import amexpress from '../../assets/logos-credit-cards/amexpress.jpg';

import goodSAC from '../../assets/qualify-shops/message-positive.svg';
import goodDeliverTime from '../../assets/qualify-shops/time-positive.svg';

import { TbAward, TbTruckDelivery } from 'react-icons/tb';
import { IoReturnDownBackOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';
import { BiChevronDown, BiMedal } from "react-icons/bi";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineTrophy } from 'react-icons/ai';
import { FcBusinessman } from 'react-icons/fc';

import './details-product.css';
import { IoIosClose } from 'react-icons/io';

export const DetailsProductId: FC = () => {

    const [ like, setLike ] = useState<boolean>(false);

    const location = useLocation();
    const locationSplit = location.pathname.split('/product/')[1];

    const { data } = useFetch<IProductId>(`https://api.mercadolibre.com/items/${ locationSplit }`);

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
                <p className="more-info">M??s informaci??n</p>

                <div className="deliver-info">
                    <span><TbTruckDelivery /></span>
                    <p>Llega gratis el miercoles</p>
                </div>
                <p className="others-forms-receive">Ver m??s formas de entrega</p>

                <div className="return-free">
                    <span><IoReturnDownBackOutline /></span>
                    <p>Devoluci??n gratis</p>
                </div>
                <p className="return-deliver">Tienes 30 d??as desde que lo recibes.</p>
                <p className="more-info-two">Conocer m??s</p>

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
                    <div>
                        <div className="content-alert-buy">
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p>C??mpralo, sube de nivel y ahorra 15% en tus env??os</p>
                                <span className="close-alert-buy">
                                    <IoIosClose />
                                </span>
                            </div>
                            <p style={{ marginTop: -10 }}>Es tu pr??ximo beneficio de Mercado Puntos</p>
                        </div>
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
                    <p style={{ color: '#000', fontWeight: 300, marginBottom: 35, fontSize: '14px', marginTop: '17px' }}>30 d??as de garant??a de f??brica.</p>
                </div>
            </div>

            <div className="seller-info">
                <p>Informaci??n sobre el vendedor</p>

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
                        <p style={{ color: '#00a650', fontWeight: 500, fontSize: 16}}>MercadoL??der Platinum</p>
                        <p style={{ color: '#666', fontWeight: 300, fontSize: 14, marginTop: -18, marginLeft: -1}}>??Es uno de los mejores del sitio!</p>
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
                        <p>Ventas en los ??ltimos 365 d??as</p>
                    </div>
                    <div>
                        <img width={30} src={ goodSAC } alt="Good customer service" />
                        <p>Brinda buena atenci??n</p>
                    </div>
                    <div>
                        <img width={30} src={ goodDeliverTime } alt="Good deliver time" />
                        <p>Entrega sus productos a tiempo</p>
                    </div>
                </div>

                <p className="more-info-seller" style={{ fontSize: '14px', fontWeight: 500 }}>Ver m??s datos de este vendedor</p>
            </div>
        </div>
    )
}
