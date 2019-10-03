import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SplashContainer from './splash/splash_container';
import DashboardContainer from './dashboard/dashboard_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute, AuthProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthProtectedRoute exact path="/" authComponent={SplashContainer} protectedComponent={DashboardContainer} />
      </Switch>
    </div>
  );
};

export default App;