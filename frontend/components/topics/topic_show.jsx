import React from 'react';
import Feeds from './feeds';

class TopicShow extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="topic-show-container content-wrapper">
        <Feeds />
      </div>
    );
  }
}

export default TopicShow;
