import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { toggleModal } from '../../actions/ui_actions';
import Header from './header';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    toggleModal: (modal) => dispatch(toggleModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
