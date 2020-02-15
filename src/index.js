import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/scss/main.scss';
import BookstoreService from './services/BookstoreService';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookstoreServiceProvider } from './components/BookStoreContext';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <BookstoreServiceProvider value={bookstoreService}>
      <Router>
        <App />
      </Router>
    </BookstoreServiceProvider>
  </Provider>,
  document.getElementById('reduxApp')
);
