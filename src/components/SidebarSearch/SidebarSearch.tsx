import './sidebar-search.css';
import { useFetch } from '../../hooks/useFetch';
import { Loading } from '../Loading/Loading';
import { useLocation } from 'react-router-dom';

export const SidebarSearch = ({ locationSplit = '' }) => {

    const { data, isLoading, hasError } = useFetch(`https://api.mercadolibre.com/sites/MLC/search?q=${ locationSplit }&limit=25`);

    const location = useLocation();
    const locationSplitt = location.pathname.split('/search/')[1];

    if( isLoading ) return <Loading />

    return (
        <div className="container-sidebar-search">
            <h4>{ locationSplitt }</h4>
            
            <div className="filters-cards">
                <p>Llegan hoy</p>
                <div className="switch-filters-card">
                    <div></div>
                </div>
            </div>
        </div>
    )
}
