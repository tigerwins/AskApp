import React from 'react';
import { Link } from 'react-router-dom';
import Answer from '../answers/answer';
import Editor from '../answers/editor';
import IndexTopicList from '../topics/index_topic_list';

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayEditor: false,
    };

    this.answerQuestion = this.answerQuestion.bind(this);
    this.closeEditor = this.closeEditor.bind(this);
  }

  componentDidMount() {
    // fetch answer with the most upvotes?
    // until upvotes are implemented, fetch the first answer w/ selector
  }

  answerQuestion(e) {
    this.setState({ displayEditor: true });
  }

  closeEditor(e) {
    this.setState({ displayEditor: false });
    // commented this out--not sure if I need it at all!
    // this.props.refreshPage();
  }

  render() {
    const { question, answer } = this.props;
    const date = new Date(Date.parse(question.created_at)).toDateString();
    return (
      <div className="question-index-item">
        <div className="question-topic-tags">
          <IndexTopicList question={question} answer={Boolean(answer)}/>
        </div>
        <div className="question-text">
          <div className="question-body-text">
            <Link to={`/questions/${question.id}`}>
              <span className="question-body">
                { question.body }
              </span>
            </Link>
          </div>
        </div>
        { this.props.answer ? (
          <div className="answer">
            <Answer answer={answer}/>
          </div>
        ) : (
          <div className="empty-question-footer">
            <span className="timestamp question-timestamp">
              Asked on { date }
            </span>

            <div className="empty-question-action-bar">
              <div className="answer-btn" onClick={this.answerQuestion}>
                <span className="pen-icon">
                  <img width="12" height="12" src={window.images.pen} />
                </span>
                <span>
                  Answer
                </span>
              </div>
            </div>

            { this.state.displayEditor &&
              <Editor
                currentUser={ this.props.currentUser }
                question={ question }
                closeEditor={ this.closeEditor }
                actionType="create" />
            }

          </div>
        )}
      </div>
    );
  }
}

export default Question;
