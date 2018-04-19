import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible/flexible';
import './index.scss';
import 'whatwg-fetch'
import registerServiceWorker from './registerServiceWorker';

import Home from './compenonts/Home'

ReactDOM.render(
  <Home/>,
  document.getElementById('root')
);
registerServiceWorker();
