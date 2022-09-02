import './sidebar-search.css';
import { useFetch } from '../../hooks/useFetch';
import { Loading } from '../Loading/Loading';

export const SidebarSearch = ({ locationSplit = '' }) => {

    const { data, isLoading, hasError } = useFetch(`https://api.mercadolibre.com/sites/MLC/search?q=${ locationSplit }&limit=25`);

    // if( isLoading ) return (<div style={{ width: '30vw', height: '100vw' }}><Loading /></div>)

    return (
        <div className="container-sidebar-search">
            {/* <div style={{ position: 'absolute', top: '50%', left: '25%' }}><Loading /></div> */}

            <Loading />
        </div>
    )
}
