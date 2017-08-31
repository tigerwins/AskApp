import Feeds from './feeds';
import { connect } from 'react-redux';
import * as TopicAPIUtil from '../../util/topic_api_util';

const mapStateToProps = (state) => {
  let topicArray = [];
  TopicAPIUtil.fetchTopics().then(topics => {
    topicArray = topics;
  });

  debugger

  return {

  };
};

export default connect(mapStateToProps, null)(Feeds);
