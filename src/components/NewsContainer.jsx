import React from 'react';
import {useEffect, useState} from 'react';
import '../css/App.css';
import News from './News';





const NewsContainer = () => {

    
    const [news, setNews] = useState([]);
    const API_URL = 'https://larsholen.com/public/loadNews.php';


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
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

    useEffect(() =>{
        getNews(API_URL, { 'offset': '0', 'limit': '10'}).then(data => {
            setNews(data);
        });
    }, []);

    return (
        <div className="app">
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
        </div>
    );
}

// Export for å kunne importere andre steder aka index.js
export default NewsContainer;