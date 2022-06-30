import React from 'react';
import {Link} from "react-router-dom";

import '../css/App.css';

import ItemContainer from '../components/ItemContainer';

const ProductsPage = () => {

    return (
        <div className="app">
            <ItemContainer />
            <p>If you are interested in something you see, or would like a custom made item. 
                <a href="mailto:larsholen6@hotmail.com">Please contact us by mail</a>
                , or 
                <Link to={"../about"}>
                &nbsp;call us!
                </Link>
            </p>
        </div>
    );
}

// Export for å kunne importere andre steder aka index.js
export default ProductsPage;