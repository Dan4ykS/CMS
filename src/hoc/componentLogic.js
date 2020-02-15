import React from 'react';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorIndicator from '../components/ErrorIndicator';

const componentLogic = (View, type = '') => {
  return class extends React.Component {
    componentDidMount() {
      if (type === 'bookList') {
        this.props.fetchBooks();
      }
    }
    render() {
      const { books, booksLoading, booksError, cartItems, onAddedToCart, onDeletedFromCart, totalPrice } = this.props,
        loading = type === 'bookList' ? booksLoading : false,
        error = type === 'bookList' ? booksError : false;
      if (loading) {
        return <LoadingIndicator />;
      }
      if (error) {
        return <ErrorIndicator />;
      }
      return <View totalPrice={totalPrice} onDeletedFromCart={onDeletedFromCart} onAddedToCart={onAddedToCart} cartItems={cartItems} books={books} />;
    }
  };
};

export default componentLogic;

// Добавить поддержку загрузки данных из корзины (подумать над реализацией синхронизации товаров в state и с сервера)
// if (this.props.cartItems.length === 0 && type === 'cartList') {
//   this.props.fetchCartItems();
// }
// (booksLoading || !shopingCartLoading) && (!booksLoading || shopingCartLoading)
