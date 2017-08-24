import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../questions/home';
import QuestionDetailContainer from '../questions/question_detail_container';
import NewQuestionsContainer from '../questions/new_questions_container';
import TopicShowContainer from '../topics/topic_show_container';

const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/topics/:id" component={TopicShowContainer} />
        <Route path="/questions/:id" component={QuestionDetailContainer} />
        <Route path="/answer" component={NewQuestionsContainer} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default Content;
