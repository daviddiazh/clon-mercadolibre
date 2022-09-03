import './sidebar-search.css';
import { useFetch } from '../../hooks/useFetch';
import { Loading } from '../Loading/Loading';
import { useLocation } from 'react-router-dom';

export const SidebarSearch = ({ data, isLoading }: any) => {

    const location = useLocation();
    const locationSplitt = location.pathname.split('/search/')[1];

    console.log('DATA SIDEBAR: ', data)

    if( isLoading ) return <Loading />

    return (
        <div className="container-sidebar-search">
            <h4 style={{ marginTop: '0px', fontSize: '1.5rem' }}>{ locationSplitt }</h4>
            <p style={{ marginTop: '-33px', marginBottom: '30px', fontWeight: 300, fontSize: '0.9rem' }}>{ data.paging.total } resultados</p>
            
            <div className="filters-cards">
                <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Llegan hoy</p>
                <div className="switch-filters-card">
                    <div></div>
                </div>
            </div>

            <div className="filters-cards">
                <div style={{ lineHeight: '5px' }}>
                    <p style={{ color: '#00a650', fontWeight: 900, fontStyle: 'italic', fontSize: '0.90rem' }}>FULL <span style={{ color: '#000', fontSize: '0.85rem', fontWeight: 600, fontStyle: 'normal' }}>te ahorra envíos</span></p>
                    <p style={{ color: '#000', fontSize: '0.75rem', fontWeight: 300 }}>Con tu carrito de compras</p>
                </div>
                <div className="switch-filters-card">
                    <div></div>
                </div>
            </div>

            <div className="filters-cards">
                <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Envío gratis</p>
                <div className="switch-filters-card">
                    <div></div>
                </div>
            </div>

            <div style={{ marginTop: 40 }}>
                {
                    data && data?.available_filters?.map((filter: any) => (
                        <div key={ filter?.id }>
                            <p>{filter?.name}: </p>
                            {/* <p>{filter?.values?.}</p> */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
