import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { good, neutral, bad } = options;
  return (
    <>
      <button name="good" type="button" value={good} onClick={onLeaveFeedback}>
        Good
      </button>
      <button
        name="neutral"
        type="button"
        value={neutral}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button name="bad" type="button" value={bad} onClick={onLeaveFeedback}>
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
