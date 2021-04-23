import React from 'react';
import './USP.css';
import icon from '../../assets/home/desktop/icon-gift.svg';
export default function USP() {
  return (
    <div>
        <div className="usp-section">
          <div className="usp-headline-container">
            <h1 className="usp-header">Why choose us ?</h1>
            <p className="usp-subheader">A large part of our role is choosing which particular coffees will be featured
              in our range. This means working closely with the best coffee growers to give
              you a more impactful experience on every level. </p>
          </div>
        </div>
        <div className="usps-containers">
          <div className="usp">
            <img className="usp-icon" src={icon} />
            <h4 className="usp-title">Best Quality</h4>
            <p className="usp-descrip">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
          </div>
          <div className="usp">
            <img className="usp-icon" src={icon} />
            <h4 className="usp-title">Exclusive Benefits</h4>
            <p className="usp-descrip">Special offers and swag when you subscribe, including 30% off your first shipment.</p>
          </div>
          <div className="usp">
            <img className="usp-icon" src={icon} />
            <h4 className="usp-title">Free Shipping</h4>
            <p className="usp-descrip">We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
          </div>
        </div>
      </div>
  )
}
