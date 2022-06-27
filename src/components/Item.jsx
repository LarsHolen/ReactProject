import React from "react";
import '../css/App.css';

const Item = ({item}) => {

    return (
        <div className="item">     
            <div>
            <p>{item.Title}</p>
            </div>

            <div>
                <img src={item.ImageURL !== 'N/A' ? item.ImageURL : 'https://via.placeholder.com/400'} alt={item.Title}/>
            </div>
            <div>
                <span>{item.PublishDate}</span>
                <h3>{item.Comment}</h3>
            </div>
        </div>
    )
}

export default Item;