import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './views/login/IndexPage';
import Products from './views/home/index';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch><Route path="/login"  component={IndexPage} />
        <Route path="/"  component={Products} />
        
      </Switch>
    </Router>
  );
}


export default RouterConfig;
