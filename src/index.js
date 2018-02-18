import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { firebaseApp } from '../src/shared/services/firebase';
// store
import ConfigureStore from '../src/store/configureStore';
// actions
import { startRecordUser, signout } from '../src/actions/auth';
// routes
import Routes, { history } from '../src/shared/routes/routes';
// load css
// require('../src/assets/style/pack.scss');
import '../src/assets/style/pack.css';

const store = ConfigureStore();
const RootDOM = document.getElementById('root');

const Root = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(Root, RootDOM);
    hasRendered = true;
  }
}

// check if user is authenticated or not
firebaseApp.auth().onAuthStateChanged((user) => {
  if(user){
    // record user id and user data
    store.dispatch(startRecordUser(user.providerData[0]));
    // console.log("user: ", store.getState());
    renderApp();
    if(history.location.pathname === '/'){
      history.push("/dashboard");
    }
    // history.push("/dashboard");
  }else {
    store.dispatch(signout());
    renderApp();
    history.push("/");
  }
});


registerServiceWorker();
