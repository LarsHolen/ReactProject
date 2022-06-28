import React from 'react';
import '../css/App.css';
import ItemContainer from '../components/ItemContainer';

const ProductsPage = () => {

    return (
        <div className="app">
            <ItemContainer />
        </div>
    );
}

// Export for å kunne importere andre steder aka index.js
export default ProductsPage;