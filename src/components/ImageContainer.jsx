import React from 'react'

const ImageContainer = (props) => {
    console.log();
  return (
    <img className="itemImage" src={props.src} alt={props.alt}/>
  )
}

export default ImageContainer