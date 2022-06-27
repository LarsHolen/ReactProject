import React from 'react';
import {useEffect, useState} from 'react';
import '../css/App.css';
import News from '../components/News';


const API_URL = 'https://larsholen.com/public/getItems.php';

const NewsPage = () => {

    const [news, setNews] = useState([]);
    const getNews = async () =>{
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        
        setNews(data);
    } 

    useEffect(() =>{
        getNews();
    }, []);

    return (
        <div className="app">
            <h1 className="itemsHeader" >News</h1>

            {news?.length > 0
            ?(
                <div className="container">
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
export default NewsPage;