import React from 'react';
import Avatar from 'react-avatar';

const QuestionPrompt = (props) => {
  return (
    <div className="prompt index-box">
      <div className="user">
        <span className="current-user">
          <Avatar className="prompt-avatar" name={ props.currentUser.name } size={25} round={true} textSizeRatio={2} />
          {props.currentUser.name}
        </span>
      </div>
      <div className="prompt-text" onClick={props.askQuestion}>
        What is your question?
      </div>
    </div>
  );
};

export default QuestionPrompt;
