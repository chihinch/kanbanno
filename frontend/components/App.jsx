import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SplashContainer from './splash/splash_container';
import NavbarContainer from './navbar/navbar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import BoardIndexContainer from './board/board_index_container';
import { AuthRoute, ProtectedRoute, AuthProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      {/* Any logged-in user will see a navbar through all parts of the app */}
      <ProtectedRoute path="/" component={NavbarContainer} />
      <Switch>
        {/* Only non-logged-in users will be able to access the login/signup forms */}
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />

        {/* If no user is logged in, render the SplashContainer at the root path */}
        {/* Otherwise, render the BoardIndexContainer at the root path (to be implemented) */}
        {/* Going to /:username/:boards will also render the BoardIndexContainer */}
        <AuthProtectedRoute exact path="/" authComponent={SplashContainer} protectedComponent={BoardIndexContainer} />
      </Switch>
    </div>
  );
};

export default App;