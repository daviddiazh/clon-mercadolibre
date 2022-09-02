import { useLocation } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';


export const Search = () => {

    const location = useLocation();
    const locationSplit = location.pathname.split('/search/')[1];

    const { data, isLoading, hasError } = useFetch(`https://api.mercadolibre.com/sites/MLC/search?q=${ locationSplit }&limit=25`);

    console.log('data: ', data)


    if( isLoading ) return <h1>Loading...</h1>

    return (
        <div>
            {
                data && data?.results?.map(element => (
                    <div>
                        <p>{element?.title}</p>
                    </div>
                ))
            }
        </div>
    )
}
