import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ session, errors }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors,
    formType: "signup",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => {
      dispatch(clearErrors());
      dispatch(signup(user));
    },
    fbSignup: (user) => {
      dispatch(clearErrors());
      dispatch(signup(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
