import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import { ChangePasswordPage, IndexPage, LoginPage, RegisterPage, ResetPasswordPage, MasterPage, ProfilePage } from './pages';

ReactStormpath.init();

ReactDOM.render(
  <Router history={browserHistory}>
    <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/change' component={ChangePasswordPage} />
      <Route path='/forgot' component={ResetPasswordPage} />
      <AuthenticatedRoute>
        <Route path='/profile' component={ProfilePage} />
      </AuthenticatedRoute>
    </HomeRoute>
  </Router>,
  document.getElementById('app-container')
);
