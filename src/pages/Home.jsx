import { Slider } from '../components/Slider/Slider';
import '../components/pages/Home.css';

import { BsCreditCard } from 'react-icons/bs';
import { AiOutlineBank } from 'react-icons/ai';
import { FaHandsHelping } from 'react-icons/fa';
import { IoAddCircleSharp } from 'react-icons/io5';

import { mockOffers, mockSuscription, mockMarketingPoints } from '../api/';
import { FcNext } from 'react-icons/fc';

export const Home = () => {

    const sliderImages = ['https://drive.google.com/uc?export=view&id=1u6KWKFUGMzuwTKJCom2koa1dUqXHIEJN', 'https://drive.google.com/uc?export=view&id=1K_-ZQVZiY2EFGPr8JAefNl-98KG7qh0s', 'https://drive.google.com/uc?export=view&id=1N0BroYVUbp8HIm4f9NS-8Dl-IpmhsNfq', 'https://drive.google.com/uc?export=view&id=1Y7UX5YgnjrPAktu8kitU8aYDfiVxovtU', 'https://drive.google.com/uc?export=view&id=1JRFTT_wtiwHlIzkUonbCzwdK4-MFjMJN', 'https://drive.google.com/uc?export=view&id=1Ubw3YdJ1JJZ8kquW637Eu01jgKOL0qTq', 'https://drive.google.com/uc?export=view&id=1Q5OhLmcQkmtZOk7bmsbcfZapWEihXgE2'];


    console.log('mockOffers: ', mockOffers);

    // let recognition = new webkitSpeechRecognition();

    // recognition.lang = 'es-ES';

    // recognition.continuous = true;

    // recognition.onresult = event => {
    //     for( const result of event.results ){
    //         console.log(result[0].transcrip)
    //     }
    // }

    // recognition.start();


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
                            <>
                                <div className="offers-card-home" key={ product.id }>
                                    <img src={ product.urlImage } alt={ product.description } />
                                    <p className="card-text-pricing-off">$ { product.priceOff } <span className="card-text-off">{ product.off }% OFF</span></p>
                                    <p style={{ fontSize: '0.9rem', paddingLeft: '0.9rem', fontWeight: 600, color: '#00a650', marginTop: '-20px' }}>{ product.freeSend ? 'Envío gratis' : null }</p>
                                </div>
                            </>
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
                    <p>Consigue los mejores beneficios en Mercado Libre y Mercado Pago</p>
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
                                    <span>{ content.freeDays }</span>
                                    <h4>{ content.title }</h4>
                                    <p>{ content.brandName }</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
            <br />
            <br />
            <br />
            <br />
        </main>
    )
}
