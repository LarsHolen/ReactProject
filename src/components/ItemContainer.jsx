import React from 'react';
import {useEffect, useState} from 'react';
import '../css/App.css';
import Item from './Item';




const ItemContainer = () => {

    const [items, setItems] = useState([]);
    const API_URL = 'https://larsholen.com/public/getItems.php';





    
 
    const getItems = async () =>{
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        
        setItems(data);
    } 

    useEffect(() =>{
        getItems();
    }, []);

    return (
        <div className="app">
            <h1 className="newsHeader" >Products</h1>

            {items?.length > 0
            ?(
                <div className="container">
                {items.map((item, index) =>
                 (
                    <Item key={index} item={item} />  
                ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No products found</h2>
                </div>
            )}
        </div>
    );
}

// Export for å kunne importere andre steder aka index.js
export default ItemContainer;