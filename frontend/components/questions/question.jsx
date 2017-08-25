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
          <span className="topic">
            Topic tags go here
          </span>
        </span>
      </div>
      <div className="question-text">
        <span className="question-detail-body">
          {question.body}
        </span>
      </div>
      <div className="action-bar">
        <div className="answer-btn">
          <span className="pen-icon">
            <img width="12" height="12" src={window.images.pen} />
            {/*<svg width="12" height="12">
              <image width="12" height="12" xlinkHref={window.images.pen_svg} />
            </svg>*/}
          </span>
          <span>
            Answer
          </span>
        </div>

        <div className="edit-question">
          <span className="edit-question-link">
            Edit Question
          </span>
        </div>

      </div>
    </div>
  );
};

export default Question;
