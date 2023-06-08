import React, { Component } from "react";
import Feedback from "./Feedback/Feedback";
import FeedbackButton from "components/FeedbackButton/FeedbackButton";
import Statistics from "components/Statistics/Statistics";

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
  }
  
    LeaveFeedback = (option) => {
      this.setState((prevState) => {
              return {
                  [option]: (prevState[option] + 1)
              }
          })
    }
    countTotalFeedback = () => {
        const total = (this.state.good + this.state.neutral + this.state.bad);
        return total;
    }
    countPositiveFeedbackPercentage = () => {
        const percentage = this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100;
        return Math.round(percentage);
    }
    
    render() {
        return (
           
          <Feedback
            title={'Please leave feedback'}
          >
            <FeedbackButton
              onLeaveFeedback={this.LeaveFeedback}
              options={Object.keys(this.state)} 
            />
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
              message={'There is no feedback.'}
            />
          </Feedback>
        )
    }
}

export default App;