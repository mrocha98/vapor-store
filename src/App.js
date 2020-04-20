import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/global';
import history from './services/history';
import store from './store/index';

import '@sweetalert2/theme-dark/dark.scss';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header id="menu" />
        <Routes />
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
