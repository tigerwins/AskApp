import React from 'react';

const Question = (props) => {
  const { question } = props;
  if (!question) {
    return null;
  }

  return (
    <div className="question">
      <div className="question-topic-tags">
        <span className="topics">
          { /* question header for topic tag(s) */ }
          Topic tags go here
        </span>
      </div>
      <div className="question-text">
        <span className="question-detail-body">
          {question.body}
        </span>
        <span className="question-details">
          {question.details}
        </span>
      </div>
    </div>
  );
};

export default Question;
