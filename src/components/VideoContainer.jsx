import React from 'react'
import YoutubeEmbed from './YoutubeEmbed';

const VideoContainer = (props) => {
  return (
     <YoutubeEmbed className="youtubeC" embedId={props.src} />
  )
}

export default VideoContainer