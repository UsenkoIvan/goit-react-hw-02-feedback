import React from 'react';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <>
    <h2>Statistics</h2>
    <p>
      Good: <span>{good}</span>
    </p>
    <p>
      Neutral: <span>{neutral}</span>
    </p>
    <p>
      Bad: <span>{bad}</span>
    </p>
    <p>
      Total: <span>{countTotalFeedback()}</span>
    </p>
    <p>
      Positive feedback:
      <span>{countPositiveFeedbackPercentage()}</span>
    </p>
  </>
);

export default Statistics;
