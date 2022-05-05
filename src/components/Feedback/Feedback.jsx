import { Component } from 'react';
import { Statistic } from './Statistic';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';

class Feedback extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = (type) => {
    this.setState(prevState => {
      return {        
        [type]: prevState[type] + 1,
      }     
    })
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = () => {
      return good + neutral + bad;
    };
    const positivePercentage = () => {
      const totalValue = countTotalFeedback();
      return Math.round((good * 100) / totalValue);
    };
    const options = Object.keys(this.state);

    return (
      <>    
        <FeedbackOptions options={options} onLeaveFeedback={this.handleLeaveFeedback} />
        {countTotalFeedback() >= 1 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positivePercentage()}
          />
        ) : (
            <Notification message='There is no feedback' />
        )}
      </>
    )
  }
}

export {Feedback}