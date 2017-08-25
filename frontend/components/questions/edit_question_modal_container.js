import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleModal } from '../../actions/ui_actions';
import { updateQuestion } from '../../actions/question_actions';
import { clearErrors } from '../../actions/session_actions';
import QuestionModal from './question_modal';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;

  return {
    displayModal: state.ui.modal.display,
    modal: state.ui.modal.component,
    errors: state.session.errors.errorList,
    formType: "edit",
    buttonText: "Update",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (question) => {
      dispatch(clearErrors());
      dispatch(updateQuestion(question));
      dispatch(toggleModal());
    },
    toggleModal: (modal) => {
      dispatch(clearErrors());
      dispatch(toggleModal(modal));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionModal));
