import React from 'react';
import { Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import createBrowserHistory from 'history/createBrowserHistory';
// components
import Pack from '../../modules/components/pack/pack';

const history = createBrowserHistory();


class Routes extends React.Component {
  render(){
    return (
      <Router path="/" history={history}>
        <AnimatedSwitch atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper">
          <Route exact path="/" component={Pack} history={history}></Route>
        </AnimatedSwitch>
      </Router>
    );
  }
}

export default Routes;