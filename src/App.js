import React, { createContext, useState } from 'react';
import './css/App.css';
import { Route, Routes} from 'react-router-dom';


import NavBar from './components/NavBar';
import Header from './components/Header';
import NewsPage from './pages/NewsPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import HowPage from './pages/HowPage';
import Footer from './components/Footer';

export const ThemeContext = createContext(null);


const App = () => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }
    return (
           
            <div className="bg" id={theme}>
            <Header />
            <NavBar theme={theme} toggleTheme={toggleTheme}/>
            <div className="pageContainer">
                <Routes>
                    <Route path="/" element={<NewsPage />} />
                    <Route path="/how" element={<HowPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
            <Footer />
        </div>
 

    
    )
}

// Export for å kunne importere andre steder aka index.js
export default App;