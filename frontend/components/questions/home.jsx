import React from 'react';
import QuestionIndexContainer from './question_index_container';
import Feeds from '../topics/feeds';

const Home = () => {
  return (
    <div className="home-container content-wrapper">
      <Feeds />
      <QuestionIndexContainer />
    </div>
  );
};


export default Home;
