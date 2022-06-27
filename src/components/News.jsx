import React from "react";
import '../css/App.css';

const News = ({news}) => {

    return (
        <div className="news">     
            <div>
                <img className="newsImage" src={news.ImageURL !== 'N/A' ? news.ImageURL : 'https://via.placeholder.com/400'} alt={news.Title}/>
            </div>
            <div>
                <span className="newsDate">{news.PublishDate}</span>
                <p>{news.Comment}</p>
                <br></br>
            </div>
        </div>
    )
}

export default News;