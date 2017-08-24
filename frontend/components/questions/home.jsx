import React from 'react';
import QuestionIndexContainer from './question_index_container';
import QuestionPrompt from './question_prompt';
// import Feeds from '../topics/feeds';

const Home = (props) => {
  return (
    <div className="home-container">
      This is the home container.
      <QuestionPrompt />
      <QuestionIndexContainer />
    </div>
  );
};


export default Home;
