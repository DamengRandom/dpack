import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
// components
import Login from '../../modules/components/auth/login';
import Pack from '../../modules/components/pack/pack';
import Costs from '../../modules/components/cost/costs';
import UpdateCost from '../../modules/components/cost/updateCost';
import CreateCost from '../../modules/components/cost/createCost';
import NotFound from '../../shared/components/notfound';
// render css styling
import '../../assets/style/pack.css';
// public & private route
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

export const history = createBrowserHistory();

class Routes extends React.Component {
  render(){
    return (
      <Router history={history}>
        <Switch>
          <PublicRoute exact path="/" component={Login}></PublicRoute>
          <PrivateRoute exact path="/dashboard" component={Pack}></PrivateRoute>
          <PrivateRoute exact path="/costs" component={Costs}></PrivateRoute>
          <PrivateRoute exact path="/updateCost/:id" component={UpdateCost}></PrivateRoute>
          <PrivateRoute exact path="/createCost" component={CreateCost}></PrivateRoute>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;