import React from 'react';
import QuestionFeedContainer from './question_feed_container';
import QuestionPrompt from './question_prompt';
// import Feeds from '../topics/feeds';

const Home = (props) => {
  return (
    <div className="home-container">
      This is the home container.
      <QuestionPrompt />
      <QuestionFeedContainer />
    </div>
  );
};


export default Home;
