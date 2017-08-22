import { connect } from 'react-redux';
import SignupForm from './signup_form';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    formType: "signup",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
