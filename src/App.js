import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = e => {
    const { name } = e.target;
    this.setState(state => ({
      [name]: state[name] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positive = (good / this.countTotalFeedback()) * 100;
    return Number(positive);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h2>Please leave feedback</h2>
        <button name="good" type="button" onClick={this.handleChange}>
          Good
        </button>
        <button name="neutral" type="button" onClick={this.handleChange}>
          neutral
        </button>
        <button name="bad" type="button" onClick={this.handleChange}>
          bad
        </button>
        <section>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        </section>
      </>
    );
  }
}
