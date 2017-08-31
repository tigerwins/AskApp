import Feeds from './feeds';
import { connect } from 'react-redux';
// import { fetchFeedTopics } from '../../util/topic_api_util';

const mapDispatchToProps = (dispatch) => {
  return {
    // retrieveFeedTopics: () => dispatch(fetchFeedTopics())
  };
};

export default connect(mapDispatchToProps, null)(Feeds);
