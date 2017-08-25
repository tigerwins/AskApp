import { connect } from 'react-redux';
import { toggleModal } from '../../actions/ui_actions';
import { createQuestion } from '../../actions/question_actions';
import { clearErrors } from '../../actions/session_actions';
import QuestionModal from './question_modal';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    displayModal: state.ui.modal.display,
    modal: state.ui.modal.component,
    errors: state.errors.errorList,
    question: {
      body: "",
      asker_id: state.session.currentUser.id,
    },
    formType: "create",
    buttonText: "Ask Question",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (question) => {
      dispatch(clearErrors());
      dispatch(createQuestion(question));
      dispatch(toggleModal());
    },
    toggleModal: (modal) => {
      dispatch(clearErrors());
      dispatch(toggleModal(modal));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionModal);
