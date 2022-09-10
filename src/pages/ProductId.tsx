import { useEffect } from "react";
import { useFetch } from '../hooks/useFetch';
import { IProductId } from '../interfaces/ProductId';
import { useLocation } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";

import '../components/pages/ProductId.css';
import { DetailsProductId } from "../components/DetailsProduct/DetailsProductId";
import { IDescriptionProductId } from '../interfaces/DescriptionProductId';

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
                        <img className="product-image" src={data?.pictures?.[0].url} alt={data?.title} />

                        <div className="description-product">
                            <h2>Descripción</h2>
                            <p>{ description?.plain_text }</p>
                        </div>
                    </div>

                    <DetailsProductId />
                </div>

            </div>
        </div>
    )
}
