import React from 'react';
import './Collection.css';
import granEspresso from '../../assets/home/desktop/image-gran-espresso.png';
import planalto from '../../assets/home/desktop/image-planalto.png';
import piccollo from '../../assets/home/desktop/image-piccollo.png';
import danche from '../../assets/home/desktop/image-danche.png';
export default function Collection() {
  return (
    <div className="collection-section">
        <h1 className="collection-section-title">our collection</h1>
        <div className="collection-container">
          <div className="collection">
            <img className="collection-image" src={granEspresso}/> 
            <h4 className="collection-title">Gran Expresso</h4>
            <p className="collection-descrip">Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
          </div>
          <div className="collection">
            <img className="collection-image" src={planalto} /> 
            <h4 className="collection-title">Planalto</h4>
            <p className="collection-descrip">Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.</p>
          </div>
          <div className="collection">
            <img className="collection-image" src={piccollo} /> 
            <h4 className="collection-title">Piccollo</h4>
            <p className="collection-descrip">Mild and smooth blend featuring notes of toasted almond and dried cherry.</p>
          </div>
          <div className="collection">
            <img className="collection-image" src={danche}/> 
            <h4 className="collection-title">Danche</h4>
            <p className="collection-descrip">Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
          </div>
        </div>
      </div>
  )
}
