import React from "react"
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'
export default function FeedbackOptions({onLeaveFeedback}){
       return <div className={css.ButtonsContainer}>
            <button type="button" name = "good" className={css.Buttons} onClick={onLeaveFeedback}>Good</button>
            <button type="button" name = "neutral" className={css.Buttons} onClick={onLeaveFeedback}>Neutral</button>
            <button type="button" name = "bad" className={css.Buttons} onClick={onLeaveFeedback}>Negative</button>
        </div>
}
FeedbackOptions.propTypes = {
   onLeaveFeedback: PropTypes.func.isRequired
}