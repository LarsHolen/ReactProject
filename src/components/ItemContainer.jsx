import React from 'react';
import {useEffect, useState} from 'react';
import '../css/App.css';
import Item from './Item';




const ItemContainer = () => {

    const [items, setItems] = useState([]);
    const API_URL = 'https://larsholen.com/public/getItems.php';

     // Vars for number of items from DB, how many are showing on page
    // what index we are at and how many one want to show at once
    const [itemsInTotal, setItemsInTotal] = useState(0);
    const [itemsShowing, setItemsShowing] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    var itemLimit = 12;
    const [pageString, setPageString] = useState("Showing " + itemsShowing  + " of " +itemsInTotal);
    const PageForward = () => {return <button className="myButton" id="forward" onClick={clickForward}>Flip forward</button>};
    const PageBackward = () => {return <button className="myButton" id="forward" onClick={clickBackward}>Flip backward</button>};
    // Saving which button was pressed, so forward scroll to top of page while back does not scroll up.
    const [goingForward, setGoingForward] = useState(true);


 
    async function getItems(url = '', data = {}) {
        await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers:{
                "Content-Type": "application/json"
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data)
            
        })
        .then((res => res.json()))
        .then(data => {
            setItems(data.items);
            setItemsShowing(data.items.length);
            setItemsInTotal(data.total);
        });
    }

    useEffect(() =>{
        getItems(API_URL, { 'offset': itemOffset, 'limit': itemLimit});
        updatePagestring();
        if(goingForward){
            window.scrollTo(0, 0);
        } 
        items.forEach(element => {
            console.log(element.Availability);    
        });
  
    }, [itemOffset, pageString, goingForward, itemLimit]);

    function updatePagestring()
    {
        setPageString("Showing " + itemsShowing  + " of " +itemsInTotal);
    }
    function clickForward()
    {
        setGoingForward(true);
        setItemOffset(prev => prev + itemLimit);
    }
    function clickBackward()
    {
        setGoingForward(false);
        setItemOffset(prev => prev - itemLimit);
       
    }

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
                    <h2>Loading, please wait..</h2>
                </div>
            )}
            <div>
                    {itemOffset !== 0 ? <PageBackward /> : null}
                    {itemsInTotal >= (itemsShowing + itemOffset +1) ? <PageForward /> : null}
            </div>
            <p>"Showing number {itemOffset + 1} to {itemOffset + items.length} of {itemsInTotal} total. "</p>
        </div>
    );
}

// Export for ?? kunne importere andre steder aka index.js
export default ItemContainer;