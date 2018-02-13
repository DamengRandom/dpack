import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
// store
import ConfigureStore from '../src/store/configureStore';
// routes
import Routes from '../src/shared/routes/routes';
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

ReactDOM.render(Root, RootDOM);
registerServiceWorker();
