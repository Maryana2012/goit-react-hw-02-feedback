import React from "react"
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'
export default function FeedbackOptions({options, onLeaveFeedback}){
   return <div className={css.ButtonsContainer}>
      {options.map(option => 
         <button type="button" key={option} name={option} className={css.Buttons} onClick={onLeaveFeedback}>{option}</button>)}
            {/* <button type="button" name = "good" className={css.Buttons} onClick={onLeaveFeedback}>Good</button>
            <button type="button" name = "neutral" className={css.Buttons} onClick={onLeaveFeedback}>Neutral</button>
            <button type="button" name = "bad" className={css.Buttons} onClick={onLeaveFeedback}>Negative</button> */}
        </div>
}
FeedbackOptions.propTypes = {
   onLeaveFeedback: PropTypes.func.isRequired
}