import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import DashboardContainer from './dashboard/dashboard_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <GreetingContainer />
      <Switch>
        <AuthRoute exact path="/" component={GreetingContainer} />
        <ProtectedRoute exact path="/" component={DashboardContainer} />
      </Switch>
    </div>
  );
};

export default App;