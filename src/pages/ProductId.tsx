import { useEffect } from "react";
import { useFetch } from '../hooks/useFetch';
import { IProductId } from '../interfaces/ProductId';
import { useLocation, useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";

import { DetailsProductId } from "../components/DetailsProduct/DetailsProductId";
import { IDescriptionProductId } from '../interfaces/DescriptionProductId';

import '../components/pages/ProductId.css';
import { ProductIdMobile } from "./ProductId-Mobile";

export const ProductId = () => {

    /**
     * 
     * otro clone: https://meli-practice-client.vercel.app/items/MLA931172973 - endpoints: https://github.com/facuperezbri/meli-practice-api/blob/main/index.js
    **/

    const location = useLocation();
    const navigate = useNavigate();
    const locationSplit = location.pathname.split('/product/')[1];

    const { data, isLoading, hasError } = useFetch<IProductId>(`https://api.mercadolibre.com/items/${ locationSplit }`);

    const { data: description } = useFetch<IDescriptionProductId>(`https://api.mercadolibre.com/items/${ locationSplit }/description`);

    const changeTitlePage = () => {
        const newTitle = `${data?.title} | Mercado Libre`;

        document.title = newTitle
    }

    useEffect(() => {

        changeTitlePage();
        
    });


    if( isLoading ) return <Loading />

    return (
        <>
            <div className="general-container-productId">
                <div className="product-container">

                    <div className="product-header">
                        <p onClick={ () => navigate(-1) }>Volver al listado</p>
                        <div className="share-and-seller">
                            <p>Compartir</p>
                            <p>Vender uno igual</p>
                        </div>
                    </div>

                    <div className="product-content">
                        <div className="product-data">
                            <img className="product-image" src={data?.pictures?.[0].url} alt={data?.title} />

                            <div className="description-product">
                                <h2>Descripción</h2>
                                <p>{ description?.plain_text }</p>
                            </div>

                            <div className="questions-container">
                                <h2>Preguntas y respuestas</h2>
                                <h4>¿Qué quieres saber?</h4>

                                <div style={{ marginLeft: '-5px' }}>
                                    <button className="btn-general-questions">Costo y tiempo de envío</button>
                                    <button className="btn-general-questions">Devoluciones gratis</button>
                                    <button className="btn-general-questions">Medios de pago</button>
                                    <button className="btn-general-questions">Gatantía</button>
                                </div>

                                <h4>Pregúntale al vendedor</h4>
                                <div className="question-box">
                                    <input 
                                        type="text" 
                                        placeholder="Escribe tu pregunta..."
                                    />
                                    <button>Preguntar</button>
                                </div>

                                <div className="without-questions">
                                    <p>Nadie hizo preguntas todavía.</p>
                                    <p>¡Haz la primera!</p>
                                </div>
                            </div>

                        </div>

                        <DetailsProductId />
                    </div>

                    <div className="post-report">
                        <p>Publicación <span>#{data?.id}</span></p>
                        <p>Denunciar</p>
                    </div>

                </div>

                <br />
                <br />
                <br />
                <br />
            </div>

            <ProductIdMobile />
        </>
    )
}
