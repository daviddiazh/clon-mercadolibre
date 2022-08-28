import React, { useState, useEffect } from 'react';
import { FcNext, FcPrevious } from 'react-icons/fc';
import './slider.css';

export const Slider = ({ sliderImages }: any) => {

    const [ currentImage, setCurrentImage ] = useState(0);

    if( !Array.isArray(sliderImages) || sliderImages.length === 0 ) return;

    const onNextImage = () => {
        setCurrentImage( currentImage === sliderImages.length - 1 ? 0 : currentImage + 1 );
    }

    const onPreviousImage = () => {
        setCurrentImage( currentImage === 0 ? sliderImages.length - 1 : currentImage - 1 );
    }

    useEffect(() => {

        const timer = setTimeout(() => {
            onNextImage();
        }, 5000)
        
        return () => {
            clearTimeout(timer);
        }
    }, [ currentImage ]);


    return (
        <>
            <div className="container-slider">
                <button onClick={ onPreviousImage } className="btn-slider"><FcPrevious /></button>
                {
                    sliderImages.map((image, index) => (
                        <div>
                            {
                                currentImage === index && (
                                    <img key={ index } src={ image } alt="Slider Image" className="slide" />
                                )
                            }
                        </div>
                    ))
                }
                <button onClick={ onNextImage } className="btn-slider"><FcNext /></button>
            </div>
            
        </>
    )
}
