import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Question from './question';
import { updateQuestion } from '../../actions/question_actions';
import { toggleModal } from '../../actions/ui_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const { users, questions } = state.entities;
  const id = ownProps.match.params.id;

  return {
    currentUser: state.session.currentUser,
    questionId: id,
    errors: state.errors.errorList,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateQuestion: question => {
      dispatch(clearErrors());
      dispatch(updateQuestion(question));
    },
    toggleModal: modal => dispatch(toggleModal(modal)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question));
