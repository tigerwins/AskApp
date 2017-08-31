import React from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import CommentIndexContainer from '../comments/comment_index_container';
import Avatar from 'react-avatar';
import {
  createUpvote,
  deleteUpvote
} from '../../actions/upvote_actions';
import { allAnswers } from '../../reducers/selectors';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    const { currentUser, answer } = props;
    const upvoteCss = currentUser.upvotedAnswers.includes(answer.id) ? "upvoted" : "not-upvoted";

    this.state = {
      expandedAnswer: false,
      numUpvotes: props.answer.num_upvotes,
      upvoteCss: upvoteCss,
    };

    // this.expandAnswer = this.expandAnswer.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.toggleUpvoteButton = this.toggleUpvoteButton.bind(this);
  }

  componentDidMount() {
    // debugger
    // const { currentUser, answer } = this.props;
    // const upvoteCss = currentUser.upvotedAnswers.includes(answer.id) ? "upvoted" : "not-upvoted";
    //
    // this.setState({ upvoteCss });
  }

  componentWillReceiveProps(nextProps) {
    debugger
    this.toggleUpvoteButton();
  }

  // expandAnswer(e) {
  //   this.setState({ expanded: true });
  // }

  handleUpvote(e) {
    e.preventDefault();
    const { currentUser, answer } = this.props;
    let upvote;

    if (currentUser.upvotedAnswers.includes(answer.id)) {
      upvote = { userId: currentUser.id, answerId: answer.id };
      this.props.deleteUpvote(upvote);
      // .then(() => { this.toggleUpvoteButton();
      // });
    } else {
      upvote = { answer_id: this.props.answer.id };
      this.props.createUpvote(upvote);
      // .then(this.toggleUpvoteButton());
    }

    // this.toggleUpvoteButton();
  }

  toggleUpvoteButton() {
    // debugger
    const { answer } = this.props;
    const upvoteCss = this.state.upvoteCss === "not-upvoted" ? "upvoted" : "not-upvoted";
    // debugger
    this.setState({ upvoteCss: upvoteCss, numUpvotes: answer.num_upvotes });
    // debugger
  }

  render() {
    const { author, answer, currentUser } = this.props;
    const date = new Date(Date.parse(answer.created_at)).toDateString();

    return (
      <div className="answer">
        <div className="answer-header">
          <div className="avatar">
            <Avatar name={ author.name } size={40} round={true} textSizeRatio={2} />
          </div>
          <div className="answer-info">
            <span className="author">{author.name}</span>
            <span className="timestamp">Answered on { date }</span>
          </div>
        </div>

        <div className="answer-content">
        {/*  { this.state.expanded || short ? ( */}
            <div className="answer-body-full">
              { ReactHtmlParser(answer.body) }
            </div>
        {/*  ) : (
            <div className="answer-body-preview" onClick={this.expandAnswer}>
              <p className="answer-body">
                { ReactHtmlParser(preview) }

              </p>
            </div>
          )} */}
        </div>

        <div className="answer-footer">
          <div className="answer-action-bar">
            <button
              onClick={this.handleUpvote}
              className={`${this.state.upvoteCss} upvote`}
            >
            <span className="upvote-text">Upvote</span>
            <span className="upvote-count">
              { this.state.numUpvotes }
            </span>
            </button>
          </div>

          <div className="comment-box home-page-comment-box">
            <CommentIndexContainer answerId={ answer.id } />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { users } = state.entities;
  const answers = allAnswers(state, ownProps.questionId);
  const answer = answers[answers.length - 1];
  // const answer = state.entities.answers[ownProps.answerId];
  return {
    currentUser: state.session.currentUser,
    answer,
    author: users[answer.author_id],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createUpvote: (upvote) => dispatch(createUpvote(upvote)),
    deleteUpvote: (upvote) => dispatch(deleteUpvote(upvote)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
