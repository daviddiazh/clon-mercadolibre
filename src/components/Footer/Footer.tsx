import React from 'react'

import sic from '../../assets/footer/sic.png';
import pum from '../../assets/footer/pum.png';

import './Footer.css';

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div>
            <button>Más información</button>
            <div>
                <p>Trabaja con nosotros</p>
                <p>Terminos y condiciones</p>
                <p>Como cuidamos tu privacidad</p>
                <p>Accesibilidad</p>
                <p>Ayuda / PQR</p>
                <p>www.sic.gov.co</p>
            </div>
            <div>
                <p>Copyright © 1999-{ currentYear } MercadoLibre Colombia LTDA.</p>
                <p>Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</p>
            </div>
            <div>
                <img src={ sic } alt="Superintendencia IyC" />
                <img src={ pum } alt="Precio por unidad de medida" />
            </div>
        </div>
    )
}
