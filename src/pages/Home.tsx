import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import '../components/pages/Home.css';

export const Home = () => {

    const slideImages = ['https://drive.google.com/uc?export=view&id=1u6KWKFUGMzuwTKJCom2koa1dUqXHIEJN', 'https://drive.google.com/uc?export=view&id=1K_-ZQVZiY2EFGPr8JAefNl-98KG7qh0s', 'https://drive.google.com/uc?export=view&id=1N0BroYVUbp8HIm4f9NS-8Dl-IpmhsNfq', 'https://drive.google.com/uc?export=view&id=1Y7UX5YgnjrPAktu8kitU8aYDfiVxovtU', 'https://drive.google.com/uc?export=view&id=1JRFTT_wtiwHlIzkUonbCzwdK4-MFjMJN', 'https://drive.google.com/uc?export=view&id=1Ubw3YdJ1JJZ8kquW637Eu01jgKOL0qTq', 'https://drive.google.com/uc?export=view&id=1Q5OhLmcQkmtZOk7bmsbcfZapWEihXgE2'];

    return (
        <>
            <Swiper
                className="sliders"
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
            >
                <SwiperSlide 
                    key={1}
                >
                    {
                        slideImages.map((url, index) => (
                            <img className="slider" key={index} src={ url } alt='Slide MeLi' />
                        ))
                    }
                </SwiperSlide>
                    
            </Swiper>
        </>
    )
}
