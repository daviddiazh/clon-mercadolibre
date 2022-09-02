import { AiFillStar } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { SidebarSearch } from '../components/SidebarSearch/SidebarSearch';
import { Loading } from '../components/Loading/Loading';


export const Search = () => {

    const location = useLocation();
    const locationSplit = location.pathname.split('/search/')[1];

    // let rate: number[] = [];
    const rate = Array.from({length: 4})

    const { data, isLoading, hasError } = useFetch(`https://api.mercadolibre.com/sites/MLC/search?q=${ locationSplit }&limit=25`);

    console.log('data: ', data)


    if( isLoading ) return <h1>Loading...</h1>

    return (
        <div>
            <div>
                <SidebarSearch />
            </div>
            <div>
                {
                    data && data?.results?.map(product => (
                        <div>
                            <img src={ product?.thumbnail } alt="" />
                            <p>{product?.title}</p>
                            <p>${ product?.price }</p>
                            <p>{ product?.shipping?.free_shipping ? 'Envío gratis' : null }</p>
                            <div>
                                {
                                    rate.map(item => (
                                        <span style={{ color: "#2667ca" }}>
                                            <AiFillStar />
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
