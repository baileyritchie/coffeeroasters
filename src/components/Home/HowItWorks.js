import React from 'react';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section className="how-it-works-section">
        <div className="how-it-works">
          <div className="how-it-works-info">
            <h1 className="how-it-works-header">How it works</h1>
            <svg className="how-it-works-img" width={791} height={31} viewBox="0 0 791 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 15.5H775.5" stroke="#FDD6BA" strokeWidth={2} />
              <circle cx="15.5" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" strokeWidth={2} />
              <circle cx="395.5" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" strokeWidth={2} />
              <circle cx="775.5" cy="15.5" r="14.5" fill="#FEFCF7" stroke="#0E8784" strokeWidth={2} />
            </svg>        
            <div className="how-it-works-container">
              <div className="step">
                <h1 className="step-number">01</h1>
                <h2 className="step-title">Pick your coffee</h2>
                <p className="step-descrip">
                  Select from our evolving range of artisan coffees. 
                  Our beans are ethically sourced and we pay fair prices for them. 
                  There are new coffees in all profiles every month for you to try out.
                </p>
              </div>
              <div className="step">
                <h1 className="step-number">02</h1>
                <h2 className="step-title">Choose the frequency</h2>
                <p className="step-descrip">
                  Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.
                </p>
              </div>
              <div className="step">
                <h1 className="step-number">03</h1>
                <h2 className="step-title">Receive and Enjoy!</h2>
                <p className="step-descrip">
                  We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.
                </p>
              </div>
            </div>
          </div>
          <button className="how-it-works-createplan">Create Your Plan</button>
        </div>
      </section>
  )
};
