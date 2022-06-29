import React from 'react';
import {useEffect, useState} from 'react';
import '../css/App.css';
import News from './News';





const NewsContainer = () => {

    
    const [news, setNews] = useState([]);
    const API_URL = 'https://larsholen.com/public/loadNews.php';

    // Vars for number of items from DB, how many are showing on page
    // what index we are at and how many one want to show at once
    const [itemsInTotal, setItemsInTotal] = useState(0);
    const [itemsShowing, setItemsShowing] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
   
    var itemLimit = 3;
    //var pageString = "Showing " + itemsShowing  + " of " +itemsInTotal;
    const [pageString, setPageString] = useState("Showing " + itemsShowing  + " of " +itemsInTotal);
    const PageForward = () => {return <button className="myButton" id="forward" onClick={ClickForward}>Flip forward</button>};
    const PageBackward = () => {return <button className="myButton" id="forward" onClick={clickMe}>Flip backward</button>};


// Example POST method implementation:
async function getNews(url = '', data = {}) {
    // Default options are marked with *
    const myHeaders = new Headers();
    
    myHeaders.append('Content-Type', 'application/json');

    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers:{
        "Content-Type": "application/json"
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    .then((res => res.json()))
    .then(data => {
        setNews(data.items);
        setItemsShowing(data.items.length);
        setItemsInTotal(data.total);
    });
    //return response.json(); // parses JSON response into native JavaScript objects
  }

    useEffect(() =>{
        getNews(API_URL, { 'offset': itemOffset, 'limit': itemLimit});
        console.log("itemOffset" +itemOffset);
    }, [itemOffset]);

    async function ClickForward()
    {
        setItemOffset(prev => prev + itemLimit);


    }
    function clickMe()
    {

        setItemOffset(prev => prev - itemLimit);
        if(itemOffset < 0) setItemOffset(prev => 0);
    }
    

    return (
        <div className="app">
            <div>
                <p>{itemsInTotal}</p>
                <p>{itemOffset}</p>
                {itemOffset !== 0 ? <PageBackward /> : null}
                {itemsInTotal >= (itemsShowing + itemOffset +1) ? <PageForward /> : null}
                
            </div>
           
            <h1 className="newsHeader" >News</h1>

            {news?.length > 0
            ?(
                <div className="newsContainer">
                {news.map((news, index) =>
                 (
                    <News key={index} news={news} />  
                ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No news found</h2>
                </div>
            )}
            <p>{pageString}</p>
        </div>
    );
}

// Export for å kunne importere andre steder aka index.js
export default NewsContainer;