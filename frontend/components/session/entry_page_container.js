import { connect } from 'react-redux';
import EntryPage from './entry_page';

// const mapStateToProps = ({ session }) => {
//   return {
//     currentUser: session.currentUser,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//
//   };
// };

export default connect(mapStateToProps, null)(EntryPage);
