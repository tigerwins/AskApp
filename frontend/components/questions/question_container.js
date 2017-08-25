import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Question from './question';
import { updateQuestion } from '../../actions/question_actions';
import { toggleModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    currentUser: state.session.currentUser,
    questionId: id,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // const id = ownProps.match.params.id;

  return {
    updateQuestion: question => dispatch(updateQuestion(question)),
    toggleModal: modal => dispatch(toggleModal(modal)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question));
