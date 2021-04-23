import React from 'react'
import './Quality.css';
import image from '../../assets/about/desktop/image-quality.jpg';

export default function Quality() {
  return (
    <section className="quality-section">
      <div className="quality-section-container">
        <div className="quality-section-text">
          <h1 className="quality-section-title">Uncompromising Quality</h1>
          <p className="quality-section-descrip">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
        </div>
        <img className="quality-section-img" src={image}/>
      </div>
    </section>
  )
}
