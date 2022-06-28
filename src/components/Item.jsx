import React from "react";
import '../css/App.css';

const Item = ({item}) => {

    return (
        <div className="item">     
            <div>
            <p className="itemTitle">{item.Title}</p>
            </div>

            <div>
                <img className="itemImage" src={item.ImageURL !== 'N/A' ? item.ImageURL : 'https://via.placeholder.com/400'} alt={item.Title}/>
            </div>
            <div>
                <span className="itemDate">{item.PublishDate}</span>
                <p className="itemComment">{item.Comment}</p>
            </div>
        </div>
    )
}

export default Item;