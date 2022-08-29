import { Slider } from '../components/Slider/Slider';
import '../components/pages/Home.css';

export const Home = () => {

    const sliderImages = ['https://drive.google.com/uc?export=view&id=1u6KWKFUGMzuwTKJCom2koa1dUqXHIEJN', 'https://drive.google.com/uc?export=view&id=1K_-ZQVZiY2EFGPr8JAefNl-98KG7qh0s', 'https://drive.google.com/uc?export=view&id=1N0BroYVUbp8HIm4f9NS-8Dl-IpmhsNfq', 'https://drive.google.com/uc?export=view&id=1Y7UX5YgnjrPAktu8kitU8aYDfiVxovtU', 'https://drive.google.com/uc?export=view&id=1JRFTT_wtiwHlIzkUonbCzwdK4-MFjMJN', 'https://drive.google.com/uc?export=view&id=1Ubw3YdJ1JJZ8kquW637Eu01jgKOL0qTq', 'https://drive.google.com/uc?export=view&id=1Q5OhLmcQkmtZOk7bmsbcfZapWEihXgE2'];

    return (
        <main>
            <Slider sliderImages={ sliderImages } /> 

            
        </main>
    )
}
