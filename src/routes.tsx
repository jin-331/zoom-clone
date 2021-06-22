import React from 'react';
import EnterPage from './Pages/EnterPage';
import MeetingPage from './Pages/MeetingPage'
import { Switch, Route, Router } from 'react-router-dom';

const Path = {
  enter: "/",
  meeting: "/meeting",
  test: "/test"
};


const routes=()=> {
  return (
      <Switch>
        <Route exact path={Path.enter} component={EnterPage}/>
        <Route exact path={Path.meeting} component={MeetingPage}/>
      </Switch>
  );
}

export default routes;
