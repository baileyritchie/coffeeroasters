import React, {useState} from 'react'
import icon from '../../assets/plan/desktop/icon-arrow.svg';
import './CoffeeQuiz.css';
import CoffeeQuizBar from './CoffeeQuizBar';
import data from './QuizData';

export default function CoffeeQuiz() {
  const [modal,setModal] = useState(false);
  const {questions,categories} = data;
  const [quizProgress,setQuizProgress] = useState(0);
  const [howYouDrink,setHowYouDrink] = useState(null);
  const [coffeeType,setCoffeeType] = useState(null);
  const [howMuch,setHowMuch] = useState(null);
  const [groundState,setGroundState] = useState(null);
  const [howOften,setHowOften] = useState(null);
  const [answersHidden,setAnswersHidden] = useState(true);
  
  const onHowYouDrinkValueChange = (e,questionId) => {
    setQuizProgress(questionId);
    getQuizQuestion(questionId)(e.target.value);
  }
  
  const savePreferences = (e) => {
    e.preventDefault();
    localStorage.setItem('howYouDrink',howYouDrink);
    localStorage.setItem('coffeeType',coffeeType);
    localStorage.setItem('howMuch',howMuch);
    localStorage.setItem('groundState',groundState);
    localStorage.setItem('howOften',howOften); 
    setModal(true);
    window.scrollTo(0,0);
  }

  const toggleAnswers = (e) => {
    setAnswersHidden(!answersHidden);
  }
  
  function getQuizProperty(question) {
    switch(question) {
      case 'How do you drink your coffee?':
        return howYouDrink;
      case 'What type of coffee?':
        return coffeeType;
      case 'How much would you like?':
        return howMuch;
      case 'Want us to grind them?':
        return groundState;
      case 'How often should we deliver?':
        return howOften;
      default:
        return "";
    }
  }
  function getQuizQuestion(questionId) {
    switch(questionId) {
      case 1:
        return setHowYouDrink;
      case 2:
        return setCoffeeType;
      case 3:
        return setHowMuch;
      case 4:
        return setGroundState;
      case 5:
        return setHowOften;
      default:
        return "";
    }
  }
  return (
    <>
    {modal &&
    <div>
      <div className="show-modal">
        <div className="modal-content">
            <div className="modal-content-header">
              <h1 className="modal-content-title">Order Summary </h1>
              <svg onClick={(e) => setModal(false)} className="close-button" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3951 9.82839C22.5303 9.96348 22.6376 10.1239 22.7108 10.3005C22.784 10.4771 22.8217 10.6663 22.8217 10.8575C22.8217 11.0486 22.784 11.2379 22.7108 11.4145C22.6376 11.5911 22.5303 11.7515 22.3951 11.8866L18.0576 16.2226L21.95 20.1135C22.2229 20.3864 22.3763 20.7566 22.3763 21.1426C22.3763 21.5286 22.2229 21.8987 21.95 22.1717C21.6771 22.4446 21.3069 22.5979 20.9209 22.5979C20.5349 22.5979 20.1647 22.4446 19.8918 22.1717L16.0009 18.2793L12.11 22.1717C11.8371 22.4446 11.4669 22.5979 11.0809 22.5979C10.6949 22.5979 10.3247 22.4446 10.0518 22.1717C9.77887 21.8987 9.62554 21.5286 9.62554 21.1426C9.62554 20.7566 9.77887 20.3864 10.0518 20.1135L13.9442 16.2226L9.60671 11.8866C9.47157 11.7513 9.36439 11.5908 9.29129 11.4141C9.21819 11.2375 9.1806 11.0482 9.18066 10.857C9.18073 10.6658 9.21846 10.4765 9.29168 10.2999C9.36491 10.1233 9.4722 9.9628 9.60744 9.82766C9.74268 9.69252 9.90321 9.58534 10.0799 9.51224C10.2565 9.43913 10.4459 9.40154 10.637 9.40161C10.8282 9.40168 11.0175 9.4394 11.1941 9.51263C11.3708 9.58586 11.5312 9.69315 11.6664 9.82839L16.0009 14.1673L20.3369 9.82984C20.472 9.69461 20.6324 9.58732 20.809 9.51412C20.9856 9.44092 21.1748 9.40325 21.366 9.40325C21.5571 9.40325 21.7464 9.44092 21.923 9.51412C22.0996 9.58732 22.26 9.69461 22.3951 9.82984V9.82839Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.36364 0C3.20633 0 2.09642 0.459739 1.27808 1.27808C0.459739 2.09642 0 3.20633 0 4.36364V27.6364C0 28.7937 0.459739 29.9036 1.27808 30.7219C2.09642 31.5403 3.20633 32 4.36364 32H27.6364C28.7937 32 29.9036 31.5403 30.7219 30.7219C31.5403 29.9036 32 28.7937 32 27.6364V4.36364C32 3.20633 31.5403 2.09642 30.7219 1.27808C29.9036 0.459739 28.7937 0 27.6364 0H4.36364ZM27.6364 2.90909H4.36364C3.97787 2.90909 3.6079 3.06234 3.33512 3.33512C3.06234 3.6079 2.90909 3.97787 2.90909 4.36364V27.6364C2.90909 28.0221 3.06234 28.3921 3.33512 28.6649C3.6079 28.9377 3.97787 29.0909 4.36364 29.0909H27.6364C28.0221 29.0909 28.3921 28.9377 28.6649 28.6649C28.9377 28.3921 29.0909 28.0221 29.0909 27.6364V4.36364C29.0909 3.97787 28.9377 3.6079 28.6649 3.33512C28.3921 3.06234 28.0221 2.90909 27.6364 2.90909V2.90909Z" fill="white"/>
              </svg>
            </div>
            <h4 className="modal-content-summary">{`I drink my coffee using ${howYouDrink} with a ${coffeeType} type of bean. ${howMuch}, packaged as ${groundState} sent to me ${howOften}.`}</h4>
            <p className="modal-content-description">Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
            <div className="modal-content-footer">
              <h4 className="modal-content-price">$14.00/mo</h4>
              <button className="modal-content-checkout">Checkout</button>
            </div>
        </div>
      </div>
    </div> 
    }
    <CoffeeQuizBar currentProgress={quizProgress}/>
    <form onSubmit={(e) => savePreferences(e)}>
      <div className="coffee-quiz">
        {questions.map((question) => (
          <fieldset className="coffee-quiz-dropdown">
            <h1 className="coffee-quiz-question">{question.title}<img className={`${answersHidden ? "coffee-dropdown-icon-down": "coffee-dropdown-icon-up"}`} src={icon} onClick={(e) => toggleAnswers(e)}/></h1>
            <div className={`${answersHidden ? "coffee-quiz-answers hidden" : "coffee-quiz-answers"}`}>
              {question.answers.map(answer => (
                <label>
                  <input className="coffee-quiz-input" type="radio" name={question.title + answer.title} value={answer.title} checked={getQuizProperty(question.title) === answer.title} onChange={(e) => onHowYouDrinkValueChange(e,question.id)}/>
                  <div className="coffee-quiz-answer">
                    <h1 className="coffee-quiz-answer-title">{answer.title}</h1>
                    <p className="coffee-quiz-answer-descrip">{answer.descrip}</p>
                  </div>
                </label>)
              )}
            </div>
          </fieldset>
        ))}
        </div>
        <div className="coffee-quiz-summary">
          <p className="summary-header">Order Summary</p>
          <h4 className="summary-text">
            <h4 className="summary-text-inline">  I drink my coffee using </h4>
            {howYouDrink ? <h4 className="summary-text-inline colored">{howYouDrink}</h4> : <h4  className="summary-text-inline">____</h4>}
            <h4 className="summary-text-inline"> with a </h4>
            {coffeeType ? <h4 className="summary-text-inline colored">{coffeeType}{" "} </h4> : <h4 className="summary-text-inline">_____ </h4>}
            <h4 className="summary-text-inline"> type of bean. </h4>
            {howMuch ? <h4 className="summary-text-inline colored">{howMuch}{", "}</h4> : <h4 className="summary-text-inline">_____, </h4>}
            <h4 className="summary-text-inline">packaged as </h4>
            {groundState ? <h4 className="summary-text-inline colored">{groundState}{" "} </h4> : <h4 className="summary-text-inline">_____ </h4>}
            <h4 className="summary-text-inline"> sent to me </h4>
            {howOften ? <h4 className="summary-text-inline colored">{howOften}. </h4> : <h4  className="summary-text-inline">____. </h4>}
          </h4>
        </div>
      {quizProgress >= 5 ? 
      <button className="create-plan-button" type="submit">Create my plan!</button>  : 
      <button className="create-plan-button" type="submit" disabled>Create my plan!</button>
      }
    </form>
    </>
  )
}
