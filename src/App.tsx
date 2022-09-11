import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { ProductId } from './pages/ProductId';
import { Search } from './pages/Search';
import { Footer } from './components/Footer/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/search/:searchId' element={ <Search /> } />
                <Route path='/product/:productId' element={ <ProductId /> } />

                <Route path='/*' element={ <Home /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;