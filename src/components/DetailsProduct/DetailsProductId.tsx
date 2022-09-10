import React from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { IProductId } from '../../interfaces/ProductId';

import visa from '../../assets/logos-credit-cards/visa.png';
import mcard from '../../assets/logos-credit-cards/mcard.png';
import amexpress from '../../assets/logos-credit-cards/amexpress.jpg';

import { TbTruckDelivery } from 'react-icons/tb';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { BiChevronDown } from "react-icons/bi";

import './details-product.css';

export const DetailsProductId = () => {

    const location = useLocation();
    const locationSplit = location.pathname.split('/product/')[1];

    const { data, isLoading, hasError } = useFetch<IProductId>(`https://api.mercadolibre.com/items/${ locationSplit }`);

    console.log('DATA BY PRODUCT ID: ', data);

    return (
        <div>
            <div className="product-info">
                <p className="condition-product">{ data?.condition === 'new' ? 'Nuevo' : 'Reacondicionado' } | { data?.sold_quantity } vendidos</p>
                <h1 className="title-product">{ data?.title?.substring(0, 50) }</h1>
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
            </div>
        </div>
    )
}
