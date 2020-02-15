import React from 'react';
import { BookstoreServiceConsumer } from '../components/BookStoreContext';

const withBookstoreService = () => (Component) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {(bookstoreService) => {
          return <Component {...props} bookstoreService={bookstoreService} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
};
export default withBookstoreService;
