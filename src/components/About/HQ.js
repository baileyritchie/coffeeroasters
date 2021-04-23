import React from 'react'
import UkImage from '../../assets/about/desktop/illustration-uk.svg';
import CanadaImage from '../../assets/about/desktop/illustration-canada.svg';
import AustraliaImage from '../../assets/about/desktop/illustration-australia.svg';
import './HQ.css';
export default function HQ() {
  return (
    <section className="hq-section">
        <div className="hq-section-container">
          <h1 className="hq-section-header">Our headquarters</h1>
          <div className="hq-section-countries">
            <div className="hq-section-country">
              <img className="hq-country-img" src={UkImage} />
              <h1 className="hq-country-name">United Kingdom</h1>
              <div className="hq-country-adress">
                <p className="hq-country-address-line">68  Asfordby Rd</p>
                <p className="hq-country-address-line">Alcaston</p>
                <p className="hq-country-address-line">SY6 1YA</p>
                <p className="hq-country-address-line">+44 1241 918425</p>
              </div>
            </div>
            <div className="hq-section-country">
              <img className="hq-country-img" src={CanadaImage} />
              <h1 className="hq-country-name">Canada</h1>
              <div className="hq-country-adress">
                <p className="hq-country-address-line">1528  Eglinton Avenue</p>
                <p className="hq-country-address-line">Toronto</p>
                <p className="hq-country-address-line">Ontario M4P 1A6</p>
                <p className="hq-country-address-line">+1 416 485 2997</p>
              </div>
            </div>
            <div className="hq-section-country">
              <img className="hq-country-img" src={AustraliaImage} />
              <h1 className="hq-country-name">Australia</h1>
              <div className="hq-country-adress">
                <p className="hq-country-address-line">36 Swanston Street</p>
                <p className="hq-country-address-line">Kewell</p>
                <p className="hq-country-address-line">Victoria</p>
                <p className="hq-country-address-line">+61 4 9928 3629</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
