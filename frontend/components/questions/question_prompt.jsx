import React from 'react';
import Avatar from 'react-avatar';

const QuestionPrompt = (props) => {
  return (
    <div className="prompt index-box">
      <div className="user">
        <div className="current-user">
          <Avatar className="prompt-avatar" name={props.currentUser.name} size={18} round={true} textSizeRatio={2} />
          <span className="user-name">{props.currentUser.name}</span>
        </div>
      </div>
      <div className="prompt-text" onClick={props.askQuestion}>
        What is your question?
      </div>
    </div>
  );
};

export default QuestionPrompt;
