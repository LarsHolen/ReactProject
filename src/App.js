import React from 'react';
import './css/App.css';
import { Route, Routes} from 'react-router-dom';

import NavBar from './components/NavBar';
import NewsPage from './pages/NewsPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import HowPage from './pages/HowPage';

// API key: 3789fb14



const App = () => {
    return (
    <>
        <NavBar />
        <div className="pageContainer">
            <Routes>
                <Route path="/" element={<NewsPage />} />
                <Route path="/how" element={<HowPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div>
    </>
    
    )
}

// Export for å kunne importere andre steder aka index.js
export default App;