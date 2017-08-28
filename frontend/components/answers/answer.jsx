import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };

    this.expandAnswer = this.expandAnswer.bind(this);
  }

  expandAnswer(e) {
    this.setState({ expanded: true });
  }

  render() {
    return (
      <div className="answer">
        <div className="author-info">

        </div>

        <div className="answer-text">
          { !this.state.expanded? (
            <div className="answer-body-preview" onClick={this.expandAnswer}>
              <p className="answer-body">
                {/* needs to be sliced to 200 characters */}
                { this.props.answer.body }
              </p>
            </div>
          ) : (
            <div className="answer-body-full">
              <p className="answer-body">
                { this.props.answer.body }
              </p>
            </div>
          )}
        </div>

        <div className="answer-footer">
          <div className="answer-action-bar">
            {/* <button>
              Upvote { need number of upvotes }
            </button> */}

          </div>
          <div className="comment-box">

          </div>
        </div>


      </div>
    );
  }
}

export default Answer;
