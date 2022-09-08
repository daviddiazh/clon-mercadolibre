import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";
import { AiFillStar } from 'react-icons/ai';
import { useFetch } from '../hooks/useFetch';
import { IProductId } from '../interfaces/ProductId';

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

    const rate = Array.from({length: 5})

    console.log('DATA BY PRODUCT ID: ', data);

    const changeTitlePage = () => {
        const newTitle = `${data?.title} | Mercado Libre`;

        document.title = newTitle
    }

    useEffect(() => {

        changeTitlePage();
        
    });


    if( isLoading ) return <Loading />

    return (
        <div>
            <p>{ data?.condition === 'new' ? 'Nuevo' : 'Reacondicionado' } | { data?.sold_quantity } vendidos</p>
            <h1>{ data?.title }</h1>
            <del>{ data?.original_price! > data?.price! ? `$ ${data?.original_price}` : null }</del>
            <p>$ { data?.price }</p>
            <div>
                {
                    rate.map(item => (
                        <span style={{ color: "#3483fa" }}>
                            <AiFillStar />
                        </span>
                    ))
                }
            </div>
            <div>
                <img src={data?.pictures?.[0].url} alt={data?.title} />
            </div>
        </div>
    )
}
