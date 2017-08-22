import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser,
        errors: []
      }
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // REMOVE THIS AFTER TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store } />, root);
});
