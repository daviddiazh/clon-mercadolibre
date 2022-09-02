import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { Search } from './pages/Search';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/search/:searchId' element={ <Search /> } />

                <Route path='/*' element={ <Home /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;