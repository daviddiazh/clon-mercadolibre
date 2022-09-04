import './sidebar-search.css';
import { useFetch } from '../../hooks/useFetch';
import { Loading } from '../Loading/Loading';
import { useLocation } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

export const SidebarSearch = ({ data, isLoading }: any) => {

    const location = useLocation();
    const locationSplitt = location.pathname.split('/search/')[1];

    console.log('DATA SIDEBAR: ', data)

    console.log('data && data?.available_filters: ', data?.available_filters?.[0]?.values?.results)

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

            <div style={{ marginTop: 40, paddingLeft: 10 }}>
                {/* {
                    data && data?.available_filters?.map((filter: any) => (
                        <div key={ filter?.id }>
                            <p>{filter?.name}: </p>
                            
                        </div>
                    ))
                } */}
                <div className="container-filters">
                    <h3 className="title-filter">Condición</h3>
                    <ul className="list-filter-options">
                        <li>Nuevo</li>
                        <li>Usado</li>
                        <li>Reacondicionado</li>
                    </ul>
                </div>

                <div className="container-filters">
                    <h3 className="title-filter">Precio</h3>
                    <ul className="list-filter-options">
                        <li>Hasta $ 1.000.000</li>
                        <li>$1.000.000 a $2.000.000</li>
                        <li>Más de $2.000.000</li>
                    </ul>
                    <div className="min-max-filter">
                        <input 
                            type="text"
                            placeholder="Mínimo"
                        />
                        <input 
                            type="text"
                            placeholder="Máximo"
                        />
                        <button
                            disabled
                            className="btn-filter-mm"
                        >
                            <AiOutlineRight />
                        </button>
                    </div>
                </div>

                <div className="container-filters">
                    <h3 className="title-filter">Tiempo de entrega</h3>
                    <ul className="list-filter-options">
                        <li>Llegan en menos de 24 hs</li>
                    </ul>
                </div>

                <div className="container-filters">
                    <h3 className="title-filter">Ubicación</h3>
                    <ul className="list-filter-options">
                        <li>Bogota D.C</li>
                        <li>Antioquia</li>
                        <li>Valle Del Cauca</li>
                        <li>Cundinamarca</li>
                        <li>Atlantico</li>
                        <li>Santander</li>
                        <li>Tolima</li>
                        <li>Bolivar</li>
                        <li>Meta</li>
                        <li style={{ color: '#3179e5' }}>Mostrar más</li>
                    </ul>
                </div>

                <div className="container-filters">
                    <h3 className="title-filter">Pago</h3>
                    <ul className="list-filter-options">
                        <li>Cuotas sin interés</li>
                    </ul>
                </div>

                <div className="container-filters">
                    <h3 className="title-filter">Tiendas oficiales</h3>
                    <ul className="list-filter-options">
                        <li>Solo tiendas oficiales</li>
                    </ul>
                </div>

                <div className="container-filters">
                    <h3 className="title-filter">Costo de envío</h3>
                    <ul className="list-filter-options">
                        <li>Gratis</li>
                    </ul>
                </div>

                <div className="container-filters">
                    <h3 className="title-filter">Envío</h3>
                    <ul className="list-filter-options">
                        <li>Mercado Envíos</li>
                        <li style={{ color: '#00a650', fontStyle: 'italic', fontWeight: 700 }}>FULL</li>
                    </ul>
                </div>

                <div className="container-filters">
                    <h3 className="title-filter">Origen de envío</h3>
                    <ul className="list-filter-options">
                        <li>Local</li>
                        <li>Internacional</li>
                    </ul>
                </div>

                <div className="container-filters">
                    <h3 className="title-filter">Descuentos</h3>
                    <ul className="list-filter-options">
                        <li>Desde 10% OFF</li>
                        <li>Desde 15% OFF</li>
                        <li>Desde 25% OFF</li>
                        <li>Desde 30% OFF</li>
                    </ul>
                </div>

                <div className="container-filters">
                    <h3 className="title-filter">Tipo de promoción</h3>
                    <ul className="list-filter-options">
                        <li>Oferta del día</li>
                    </ul>
                </div>

                <div className="container-filters">
                    <h3 className="title-filter">Detalles de la publicación</h3>
                    <ul className="list-filter-options">
                        <li>Mejores vendedores</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
