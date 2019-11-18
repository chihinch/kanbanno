import React from 'react';
import { Switch } from 'react-router-dom';

import SplashContainer from './splash/splash_container';
import NavbarContainer from './navbar/navbar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import BoardIndexContainer from './board/board_index_container';
import Modal from './ui/modal';
import Menu from './ui/menu';
import { AuthRoute, ProtectedRoute, AuthProtectedRoute } from '../util/route_util';
import BoardShowContainer from './board/board_show_container';

const App = () => {
  return (
    <div>
      <Modal />
      <Menu />
      {/* Any logged-in user will see a navbar through all parts of the app */}
      <ProtectedRoute path="/" component={NavbarContainer} />
      <Switch>
        {/* Only non-logged-in users will be able to access the login/signup forms */}
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />

        {/* Protected routes for boards */}
        <ProtectedRoute exact path="/boards/:boardId" component={BoardShowContainer} />
        <ProtectedRoute exact path="/boards" component={BoardIndexContainer} />

        {/* If no user is logged in, render the SplashContainer at the root path */}
        {/* Otherwise, render the BoardIndexContainer at the root path */}
        <AuthProtectedRoute exact path="/" authComponent={SplashContainer} protectedComponent={BoardIndexContainer} />
      </Switch>
    </div>
  );
};

export default App;