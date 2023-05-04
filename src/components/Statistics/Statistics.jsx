import React from "react";
import css from './Statistics.module.css';

export default function Statistics ({good,neutral,bad, total, positivePercentage=0}) {
    return <div>
           <div className={css.Article}>
           <span className={css.Text}>Good: {good} </span>
           <span className={css.Text}>Neutral: {neutral}  </span>
           <span className={css.Text}>Negative: {bad} </span>
           </div>
           <div className={css.Article}>
           <span className={css.TextTotal}>Total: {total}</span>
           <span className={css.TextTotal}>Positive Feedbacks : {positivePercentage}%</span>
           </div>       
           </div>
    
} 