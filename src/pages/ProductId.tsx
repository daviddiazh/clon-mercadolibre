import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";
import { useFetchByID } from '../hooks/useFetchByID';

export const ProductId = () => {

    const location = useLocation();
    const locationSplit = location.pathname.split('/product/')[1];

    console.log( locationSplit )

    const { data, isLoading, hasError } = useFetchByID(`https://api.mercadolibre.com/items/${ locationSplit }`);

    console.log('DATA BY PRODUCT ID: ', data);

    const changeTitlePage = () => {
        const newTitle = `${data?.title} | Mercado Libre`;

        document.title = newTitle
    }

    useEffect(() => {

        changeTitlePage();
        
    }, [ location.pathname ]);


    if( isLoading ) return <Loading />

    return (
        <div>

        </div>
    )
}
