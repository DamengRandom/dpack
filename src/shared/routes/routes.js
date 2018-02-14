import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import createBrowserHistory from 'history/createBrowserHistory';
// components
import Login from '../../modules/components/login/login';
import Pack from '../../modules/components/pack/pack';
import Costs from '../../modules/components/cost/costs';
import UpdateCost from '../../modules/components/cost/updateCost';
import ViewCost from '../../modules/components/cost/viewCost';
import NotFound from '../../shared/components/notfound';

const history = createBrowserHistory();

class Routes extends React.Component {
  render(){
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    return (
      <Router path="/" history={history}>
        <AnimatedSwitch atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper">
          <Route exact path="/" component={isAuthenticated ? Pack : Login} history={history}></Route>
          <Route exact path="/costs" component={Costs} history={history}></Route>
          <Route exact path="/updateCosts/:id" component={UpdateCost} history={history}></Route>
          <Route exact path="/viewCost/:id" component={ViewCost} history={history}></Route>
          <Route path="*" component={NotFound} history={history}></Route>
        </AnimatedSwitch>
      </Router>
    );
  }
}

export default Routes;

// <Route exact path="/login" component={Login} history={history}></Route>

// <Route exact path="/" render={() => {
//   isAuthenticated === null ? (<Redirect to="/login" />) : (<Redirect to="/" />)
// }} history={history}></Route>