import React, { useContext } from 'react';
import './images.css';
import ImageContext from './UrlImages'

const Images = () => {
  const context = useContext(ImageContext);
  return (
    <div className="images">
      <img src={context.image1} alt="exercise react"/>
      <img src={context.image2} alt="exercise react"/>
      <img src={context.image3} alt="exercise react"/>
    </div>
  )
}

export default Images;