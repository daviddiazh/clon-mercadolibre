import { useEffect } from 'react';
import { mockOffers, mockSuscription, mockMarketingPoints } from '../api';
import { Slider } from '../components/Slider/Slider';
import '../components/pages/Home.css';

import { FcNext } from 'react-icons/fc';
import { BsCreditCard } from 'react-icons/bs';
import { AiOutlineBank } from 'react-icons/ai';
import { FaHandsHelping } from 'react-icons/fa';
import { IoAddCircleSharp } from 'react-icons/io5';

import slider1 from '../assets/sliders/slider1.webp';
import slider2 from '../assets/sliders/slider2.webp';
import slider3 from '../assets/sliders/slider3.webp';
import slider4 from '../assets/sliders/slider4.webp';
import slider5 from '../assets/sliders/slider5.webp';
import slider6 from '../assets/sliders/slider6.webp';
import slider7 from '../assets/sliders/slider7.webp';


export const Home = () => {

    const sliderImages = [slider1, slider2, slider3, slider4, slider5, slider6, slider7];

    const changeTitlePage = () => {
        const newTitle = 'Mercado Libre Colombia';

        document.title = newTitle
    }

    useEffect(() => {

        changeTitlePage();
        
    });


    return (
        <main>
            <Slider sliderImages={ sliderImages } /> 

            <div className="second-container-home">
                <div className='info-pay'>
                    <div className="info-pay-item">
                        <span>
                            <BsCreditCard/>
                        </span>
                        <div>
                            <p>Hasta 48 cuotas</p>
                            <p>Ver más</p>
                        </div>
                    </div>
                    <div className="info-pay-item">
                        <span>
                            <AiOutlineBank />
                        </span>
                        <div>
                            <p style={{ lineHeight: 1 }}>Transferencia desde tu banco</p>
                            <p>Ver más</p>
                        </div>
                    </div>
                    <div className="info-pay-item">
                        <span>
                            <FaHandsHelping />
                        </span>
                        <div>
                            <p>Paga en efectivo</p>
                            <p>Ver más</p>
                        </div>
                    </div>
                    <div className="info-pay-item" style={{ borderLeft: '0.5px solid #cecece' }}>
                        <span>
                            <IoAddCircleSharp />
                        </span>
                        <div>
                            <p>Más medios de pago</p>
                            <p>Ver todos</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offers-container-home">
                <div>
                    <h2>Ofertas</h2>
                    <p>Ver todas</p>
                </div>
                <div className="offers-container-cards">
                    {
                        mockOffers && mockOffers?.map( product => (
                            <div className="offers-card-home" key={ product.id }>
                                <img src={ product.urlImage } alt={ product.description } />
                                <p className="card-text-pricing-off">$ { product.priceOff } <span className="card-text-off">{ product.off }% OFF</span></p>
                                <p style={{ fontSize: '0.9rem', paddingLeft: '0.9rem', fontWeight: 600, color: '#00a650', marginTop: '-20px' }}>{ product.freeSend ? 'Envío gratis' : null }</p>
                            </div>
                        ))
                    }
                </div>
                <button className="btn-next-offers"><FcNext /></button>
            </div>

            <div className="suscription-level-container-home">
                <div className="header-suscription-level">
                    <h3>Suscríbete al nivel 6</h3>
                    <div className="header-pricing-suscription">
                        <span><del>$50.690</del></span>
                        <h4>$17.899 <span style={{ fontSize: 15 }}>/mes</span></h4>
                    </div>
                </div>

                <div className="content-container-suscription">
                    <p style={{ padding: '0 30px' }}>Consigue los mejores beneficios en Mercado Libre y Mercado Pago</p>
                    <div className="content-suscription">
                        {
                            mockSuscription?.map( content => (
                                <div key={ content.id } style={{ display: 'flex', alignItems: 'center' }}>
                                    <span><img src={ content.urlImage } width={ 50 } height={ 45 } alt={ content.description } /></span>
                                    <p>{ content.description }</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div style={{ borderBottom: '1px solid #ededed', width: '100%' }} />
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <button className="btn-suscription">Suscríbete</button>
                </div>
            </div>
            
            <div className="benefits-points-container-home">
                <div>
                    <h2>Beneficios de Mercado Puntos</h2>
                    <p>Ver todos los beneficios</p>
                </div>

                <div className="container-cards-benefits">
                    {
                        mockMarketingPoints?.map( content => (
                            <div key={ content.id } className="card-benefit" style={{ backgroundImage: `url(${content.backgroundPhoto})` }}>
                                <div>
                                    <img className="photo-brand-card" width={80} height={80} src={ content.profilePhotoBrand } alt={ content.brandName } />
                                </div>
                                <div className="content-card-benefit">
                                    <span style={{ fontSize: 13, fontWeight: 700 }}>{ content.freeDays }</span>
                                    <h4 style={{ fontSize: 20, fontWeight: 700, width: '200px' }}>{ content.title }</h4>
                                    <p style={{ fontSize: 16, fontWeight: 500 }}>{ content.brandName }</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </main>
    )
}
