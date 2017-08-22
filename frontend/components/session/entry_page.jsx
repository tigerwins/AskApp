import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

const EntryPage = () => {
  return (
    <div className="entry-forms-box">
      <span className="logo entry-page">Ask()</span>
      <span className="tagline">Knowledge: Ask and ye shall receive</span>
      <div className="entry-forms-inner-box">
        <div className="signup entry-form">
          <SignupFormContainer />
        </div>
        <div className="login entry-form">
          <LoginFormContainer />
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
