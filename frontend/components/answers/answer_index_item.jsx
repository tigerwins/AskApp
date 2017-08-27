import React from 'react';

const AnswerIndexItem = (props) => {


  return(
    <div className="answer-index-item">
      <div className="answer-header">
        <div className="avatar">
          {/* PROFILE AVATAR GOES HERE */}
        </div>
        <div className="answer-info">
          <span className="author">{props.author.name}</span>
          {/* NEED TO CONVERT TO DATE */}
          <span className="timestamp">Answered at {props.answer.created_at}</span>
        </div>
      </div>

      <div className="answer-content">
        
      </div>

      <div className="comment-box">

      </div>
    </div>
  );
};

export default AnswerIndexItem;
