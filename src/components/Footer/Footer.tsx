import React from 'react'

import sic from '../../assets/footer/sic.png';
import pum from '../../assets/footer/pum.png';

import './Footer.css';
import { IoIosArrowUp } from 'react-icons/io';

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className="container-footer">
            <div className="more-info-btn-container">
                <button className="btn-more-info">
                    <p>Más información</p>
                    <span><IoIosArrowUp /></span>
                </button>
            </div>
            <div className="container-footer">
                <div className="mock-links">
                    <p>Trabaja con nosotros</p>
                    <p>Terminos y condiciones</p>
                    <p>Como cuidamos tu privacidad</p>
                    <p>Accesibilidad</p>
                    <p>Ayuda / PQR</p>
                    <p>www.sic.gov.co</p>
                </div>
                <div className="copyright">
                    <p>Copyright © 1999-{ currentYear } MercadoLibre Colombia LTDA.</p>
                    <p>Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</p>

                    <h3 style={{ textAlign: 'right', paddingTop: 10 }}>By. David Diaz H - { currentYear }</h3>
                </div>
                <div className="container-imgs">
                    <img src={ sic } alt="Superintendencia IyC" />
                    <img src={ pum } alt="Precio por unidad de medida" />
                </div>
            </div>
        </div>
    )
}
