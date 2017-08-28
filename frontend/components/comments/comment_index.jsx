import React from 'react';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: Boolean(props.expanded),
    };
  }

  render() {
    return (
      <div className="comment-index">

      </div>
    );
  }
}

export default CommentIndex;
