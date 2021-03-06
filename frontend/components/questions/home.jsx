import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/ui_actions';
import { fetchQuestions } from '../../actions/question_actions';

import QuestionIndexContainer from './question_index_container';
import Feeds from '../topics/feeds';
import QuestionPrompt from './question_prompt';
import CreateQuestionModal from './create_question_modal_container';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.askQuestion = this.askQuestion.bind(this);
  }

  componentDidMount() {
    this.props.requestQuestions();
    window.scrollTo(0, 0);
  }

  askQuestion(e) {
    this.props.toggleModal(<CreateQuestionModal />);
  }

  render() {
    return (
      <div className="home-container content-wrapper">
        <Feeds />
        <div className="question-index-container index-container">
          <QuestionPrompt
            currentUser={this.props.currentUser}
            askQuestion={this.askQuestion}
          />
          <QuestionIndexContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestQuestions: () => dispatch(fetchQuestions()),
    toggleModal: (modal) => dispatch(toggleModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
