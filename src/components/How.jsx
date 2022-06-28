import React from "react";
import '../css/App.css';
import ImageContainer from "./ImageContainer";
import VideoContainer from "./VideoContainer";
import ImageVideoContainer from "./ImageVideoContainer";

const How = ({how}) => {
    function selectMedia() {
        if(how.ImageURL !== null && how.VideoURL == null){
            return <ImageContainer src={how.ImageURL} alt={how.Title} />;
        }
        if(how.VideoURL !== null && how.ImageURL == null){
            return <VideoContainer src={how.VideoURL} alt={how.Title} />;
        }
        if(how.VideoURL !== null && how.ImageURL !== null){
            return <ImageVideoContainer videosrc={how.VideoURL} alt={how.Title} imagesrc={how.ImageURL}  />;
        }
        return <></>;

    }
    
    return (
        <div className="how">     
            <div>
            <p className="howTitle">{how.Title}</p>
            </div>

            <div>
                {selectMedia()}
            </div>
            <div>
                <span className="howDate">{how.PublishDate}</span>
                <p className="howComment">{how.Comment}</p>
            </div>
        </div>
    )
}

export default How;