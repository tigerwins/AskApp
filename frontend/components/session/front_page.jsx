import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

const FrontPage = () => {
  return (
    <div className="front-page">
      <Route exact path="/" component={LoginFormContainer} />
      <Route exact path="/" component={SignupFormContainer} />
    </div>
  );
};

export default FrontPage;
