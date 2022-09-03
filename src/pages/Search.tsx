import { AiFillStar } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { SidebarSearch } from '../components/SidebarSearch/SidebarSearch';
import { Loading } from '../components/Loading/Loading';
import '../components/pages/Search.css';
import { useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';


export const Search = () => {

    const location = useLocation();
    const locationSplit = location.pathname.split('/search/')[1];

    const rate = Array.from({length: 5})

    const { data, isLoading, hasError } = useFetch(`https://api.mercadolibre.com/sites/MLC/search?q=${ locationSplit }&limit=30`);

    console.log('data: ', data)

    const changeTitlePage = () => {
        const newTitle = `${locationSplit} | MercadoLibre 📦`;

        document.title = newTitle
    }

    useEffect(() => {

        changeTitlePage();
        
    }, [ location.pathname ]);


    if( isLoading ) return <Loading />

    return (
        <div className="general-container-search-page">

            <div className="header-search-page">
                <div></div>
                <div>
                    <p>Ordenar por <span>Más relevantes <BiChevronDown color='#3483fa' fontSize={23} /></span></p>
                </div>
            </div>

            <div className="container-sidebar-and-search">
                <div className="container-sidebar">
                    <SidebarSearch data={data} isLoading={isLoading} />
                </div>
                <div className="container-search-page">
                    {
                        data && data?.results?.map(product => (
                            <div className="one-product-list">
                                <div>
                                    <img className="photo-product" src={ product?.thumbnail } alt={ product?.title } />
                                </div>
                                <div style={{ paddingLeft: 15 }}>
                                    <p style={{ fontWeight: 300, fontSize: '1.3rem', marginTop: '3px' }}>{product?.title}</p>
                                    <div style={{ display: 'flex', alignItems: 'center', lineHeight: '5px', justifyContent: 'space-between', width: '350px', marginTop: '-10px' }}>
                                        <div>
                                            <p style={{ fontWeight: 500, fontSize: '1.6rem', marginTop: '15px', color: '#000', }}>$ { product?.price }</p>
                                            <p style={{ fontWeight: 400, fontSize: '0.9rem', marginTop: '-6px', color: '#000', }}>en 36x $ {`${
                                                String(product?.price! / 36).split('.')[0]
                                            }`}</p>
                                        </div>
                                        <div style={{ paddingTop: '15px',}}>
                                            {
                                                rate.map(item => (
                                                    <span style={{ color: "#3483fa" }}>
                                                        <AiFillStar />
                                                    </span>
                                                ))
                                            }
                                            <p style={{ fontWeight: 300, fontSize: '0.7rem', marginTop: '13px', color: '#000', }}>Disponible</p>
                                        </div>
                                    </div>
                                    <p style={{ fontWeight: 600, fontSize: '0.9rem', marginTop: '0px', color: '#00a650', }}>{ product?.shipping?.free_shipping ? 'Envío gratis' : null }</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
