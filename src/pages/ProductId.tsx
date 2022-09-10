import { useEffect } from "react";
import { useFetch } from '../hooks/useFetch';
import { IProductId } from '../interfaces/ProductId';
import { useLocation } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";

import visa from '../assets/logos-credit-cards/visa.png';
import mcard from '../assets/logos-credit-cards/mcard.png';
import amexpress from '../assets/logos-credit-cards/amexpress.jpg';

import { TbTruckDelivery } from 'react-icons/tb';
import { IoReturnDownBackOutline } from 'react-icons/io5';

import '../components/pages/ProductId.css';
import { BiChevronDown } from "react-icons/bi";

export const ProductId = () => {

    /**
     * https://api.mercadolibre.com/items/MLC615879515 productID
     * https://api.mercadolibre.com/items/MLC615879515/description description
     * https://api.mercadolibre.com/users/550063615 shopID
     * https://api.mercadolibre.com/sites/MLC/search?q=iphone search
     * 
     * otro clone: https://meli-practice-client.vercel.app/items/MLA931172973 - endpoints: https://github.com/facuperezbri/meli-practice-api/blob/main/index.js
    **/

    const location = useLocation();
    const locationSplit = location.pathname.split('/product/')[1];

    const { data, isLoading, hasError } = useFetch<IProductId>(`https://api.mercadolibre.com/items/${ locationSplit }`);

    console.log('DATA BY PRODUCT ID: ', data);

    const changeTitlePage = () => {
        const newTitle = `${data?.title} | Mercado Libre`;

        document.title = newTitle
    }

    useEffect(() => {

        changeTitlePage();
        
    });


    if( isLoading ) return <Loading />

    return (
        <div className="general-container-productId">
            <div className="product-container">

                <div className="product-header">
                    <p>Volver al listado</p>
                    <div className="share-and-seller">
                        <p>Compartir</p>
                        <p>Vender uno igual</p>
                    </div>
                </div>

                <div className="product-content">
                    <div className="product-data">
                        <img src={data?.pictures?.[0].url} alt={data?.title} />
                        
                        <div className="">

                        </div>
                    </div>

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

            </div>
        </div>
    )
}
