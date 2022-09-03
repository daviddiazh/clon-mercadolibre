import './sidebar-search.css';
import { useFetch } from '../../hooks/useFetch';
import { Loading } from '../Loading/Loading';

export const SidebarSearch = ({ locationSplit = '' }) => {

    const { data, isLoading, hasError } = useFetch(`https://api.mercadolibre.com/sites/MLC/search?q=${ locationSplit }&limit=25`);

    if( isLoading ) return <Loading />

    return (
        <div className="container-sidebar-search">
            <h1>hola mundo</h1>
        </div>
    )
}
