import { connect } from 'react-redux';
import { toggleModal } from '../../actions/ui_actions';
import { updateQuestion } from '../../actions/question_actions';
import { clearErrors } from '../../actions/session_actions';
import QuestionModal from './question_modal';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;

  return {
    displayModal: state.ui.modal.display,
    errors: state.session.errors,
    question: state.entities.questions[id],
    formType: "edit",
    buttonText: "Update",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (question) => {
      dispatch(clearErrors());
      dispatch(updateQuestion(question));
    },
    toggleModal: (modal) => {
      dispatch(clearErrors());
      dispatch(toggleModal(modal));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionModal);
