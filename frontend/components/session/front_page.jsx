import React from 'react';
import EntryPage from './entry_page';
import HomeContainer from '../questions/home_container';

const FrontPage = ({ currentUser }) => {
  return (
    <div>
      { currentUser ? (
        <HomeContainer />
      ) : (
        <EntryPage />
      )}
    </div>
  );
};

export default FrontPage;
