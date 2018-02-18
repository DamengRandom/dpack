import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import createBrowserHistory from 'history/createBrowserHistory';
// import { firebaseApp } from '../services/firebase';
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
          <PrivateRoute exact path="/updateCosts/:id" component={UpdateCost}></PrivateRoute>
          <PrivateRoute exact path="/createCost/:id" component={CreateCost}></PrivateRoute>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;