import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import App from './app';
import '../public/style.css';
// import store from './store';

ReactDOM.render(
      <App />, document.getElementById('app')
);
