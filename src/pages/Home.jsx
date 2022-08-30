import { Slider } from '../components/Slider/Slider';
import '../components/pages/Home.css';

import { BsCreditCard } from 'react-icons/bs';
import { AiOutlineBank } from 'react-icons/ai';
import { FaHandsHelping } from 'react-icons/fa';
import { IoAddCircleSharp } from 'react-icons/io5';

import { mockOffers } from '../api/mock-offers';
import { FcNext } from 'react-icons/fc';

export const Home = () => {

    const sliderImages = ['https://drive.google.com/uc?export=view&id=1u6KWKFUGMzuwTKJCom2koa1dUqXHIEJN', 'https://drive.google.com/uc?export=view&id=1K_-ZQVZiY2EFGPr8JAefNl-98KG7qh0s', 'https://drive.google.com/uc?export=view&id=1N0BroYVUbp8HIm4f9NS-8Dl-IpmhsNfq', 'https://drive.google.com/uc?export=view&id=1Y7UX5YgnjrPAktu8kitU8aYDfiVxovtU', 'https://drive.google.com/uc?export=view&id=1JRFTT_wtiwHlIzkUonbCzwdK4-MFjMJN', 'https://drive.google.com/uc?export=view&id=1Ubw3YdJ1JJZ8kquW637Eu01jgKOL0qTq', 'https://drive.google.com/uc?export=view&id=1Q5OhLmcQkmtZOk7bmsbcfZapWEihXgE2'];


    console.log('mockOffers: ', mockOffers)

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

            <div className="third-container-home">
                <div>
                    <h1>Ofertas</h1>
                    <p>Ver más</p>
                </div>
                <div className="third-container-cards">
                    {
                        mockOffers && mockOffers?.map( product => (
                            <div className="third-card-home" key={ product.id }>
                                <img src={ product.urlImage } alt={ product.description } />
                                <p>$ { product.priceOff } <span>{ product.off }% OFF</span></p>
                                <p>{ product.freeSend ? 'Envío gratis' : null }</p>
                            </div>
                        ))
                    }
                    
                    <button className="btn-next-offers"><FcNext /></button>
                </div>
            </div>
            
            <br />
            <br />

        </main>
    )
}
