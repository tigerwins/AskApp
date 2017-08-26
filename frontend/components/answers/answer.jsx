import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  render() {
    return (
      <div>
        <div className="author-info">

        </div>

        <div className="answer-text">
          <div className={"answer-body-preview"} onClick={this.expandAnswer}>
            <p className="answer-body">

            </p>
          </div>
          <div className="answer-body-full">
            <p className="answer-body">

            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Answer;
