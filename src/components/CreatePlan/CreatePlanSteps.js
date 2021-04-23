import React from 'react'
import './CreatePlanSteps.css';

export default function CreatePlanSteps() {
  return (
    <section className="plan-how-it-works-section">
        <div className="plan-how-it-works">
          <div className="plan-how-it-works-info">
            <svg className="plan-how-it-works-img" width={791} height={31} viewBox="0 0 791 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 15.5H775.5" stroke="#FDD6BA" strokeWidth={2} />
              <circle cx="15.5" cy="15.5" r="14.5" stroke="#0E8784" strokeWidth={2} />
              <circle cx="395.5" cy="15.5" r="14.5" stroke="#0E8784" strokeWidth={2} />
              <circle cx="775.5" cy="15.5" r="14.5" stroke="#0E8784" strokeWidth={2} />
            </svg>
            <div className="plan-how-it-works-container">
              <div className="plan-step">
                <h1 className="plan-step-number">01</h1>
                <h2 className="plan-step-title">Pick your coffee</h2>
                <p className="plan-step-descrip">
                  Select from our evolving range of artisan coffees. 
                  Our beans are ethically sourced and we pay fair prices for them. 
                  There are new coffees in all profiles every month for you to try out.
                </p>
              </div>
              <div className="plan-step">
                <h1 className="plan-step-number">02</h1>
                <h2 className="plan-step-title">Choose the frequency</h2>
                <p className="plan-step-descrip">
                  Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.
                </p>
              </div>
              <div className="plan-step">
                <h1 className="plan-step-number">03</h1>
                <h2 className="plan-step-title">Receive and Enjoy!</h2>
                <p className="plan-step-descrip">
                  We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
