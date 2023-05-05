import React from "react";
import css from'components/App.module.css'
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export default class Feedback extends React.Component {
    state = {
         good: 0,
         neutral: 0,
         bad: 0
        }
    
    handleFeedback = (event) => {
        const { name }   = event.target;
        this.setState((prevState) => {
            return { [name]: prevState[name] + 1 }} )
    }
    
    countTotalFeedback = () => {
        let total = this.state.good + this.state.neutral + this.state.bad;
        return total;
      }
    countPositiveFeedbackPercentage = () => {
        let positivePercentage = Math.ceil(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100);
        return positivePercentage;
    }
    render() {
        return (<Section title='Please leave feedback'>          
             <FeedbackOptions
                onLeaveFeedback={this.handleFeedback}  
            />
            <p className={css.Subtitle}>Statistics</p>
            {(this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0)
                ?  <Notification
                   message="There is no feedback"/>
                :  <Statistics
                   good={this.state.good}
                   neutral={this.state.neutral}
                   bad={this.state.bad}
                   total={this.countTotalFeedback()}
                   positivePercentage={this.countPositiveFeedbackPercentage()} />        }
             </Section>
        )        
    }
}