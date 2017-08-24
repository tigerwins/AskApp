import React from 'react';

const QuestionPrompt = (props) => {
  return (
    <div className="prompt index-box">
      <div className="user">
        <span className="current-user">
          { /* <img />  need currentUser profile image here */ }
          {props.currentUser.name}
        </span>
      </div>
      <div className="prompt-text">What is your question?</div>
    </div>
  );
};

export default QuestionPrompt;
