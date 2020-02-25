import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/scss/main.scss';
import BookstoreService from './services/BookstoreService';
import UsersService from './services/UsersService'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { ServicesProvider } from './components/Context';

const services = {
  bookstoreService: new BookstoreService(),
  usersService: new UsersService(),
};

ReactDOM.render(
  <Provider store={store}>
    <ServicesProvider value={services}>
      <Router>
        <App />
      </Router>
    </ServicesProvider>
  </Provider>,
  document.getElementById('reduxApp')
);
