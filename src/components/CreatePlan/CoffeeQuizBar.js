import React from 'react'
import './CoffeeQuizBar.css'

export default function CoffeeQuizBar({currentProgress}) {
  return (
    <div className="coffee-quiz-bar">
      <div className={`quiz-progress-bar ${currentProgress >= 1 ? "": "inactive"}`}>
        <h1 className="quiz-progress-num">01</h1>
        <h1 className="quiz-progress-title">Preferences</h1>
      </div>
      <hr className="quiz-progress-dividor" />
      <div className={`quiz-progress-bar ${currentProgress >= 2 ? "": "inactive"}`}>
        <h1 className="quiz-progress-num">02</h1>
        <h1 className="quiz-progress-title">Bean Type</h1>
      </div>
      <hr className="quiz-progress-dividor" />
      <div className={`quiz-progress-bar ${currentProgress >= 3 ? "": "inactive"}`}>
        <h1 className="quiz-progress-num">03</h1>
        <h1 className="quiz-progress-title">Quantity</h1>
      </div>
      <hr className="quiz-progress-dividor" />
      <div className={`quiz-progress-bar ${currentProgress >= 4 ? "": "inactive"}`}>
        <h1 className="quiz-progress-num">04</h1>
        <h1 className="quiz-progress-title">Grind Option</h1>
      </div>
      <hr className="quiz-progress-dividor" />
      <div className={`quiz-progress-bar ${currentProgress >= 5 ? "": "inactive"}`}>
        <h1 className="quiz-progress-num">05</h1>
        <h1 className="quiz-progress-title">Deliveries</h1>
      </div>
      <hr className="quiz-progress-dividor" />
    </div>
  )
}
