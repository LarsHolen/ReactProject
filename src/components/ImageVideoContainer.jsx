import React from 'react'
import YoutubeEmbed from './YoutubeEmbed';

const ImageVideoContainer = (props) => {
  return (
    <div>
        <img className="itemVideo" src={props.imagesrc} alt={props.alt}/>
        <YoutubeEmbed embedId={props.videosrc} alt={props.alt} />
    </div>
  )
}

export default ImageVideoContainer