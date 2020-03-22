const bookAddToCart = (bookId) => {
  return {
    type: 'BOOK_ADD_TO_CART',
    payload: bookId,
  };
};

const bookDeletedFromCart = (bookId) => {
  return {
    type: 'BOOK_DELETE_FROM_CART',
    payload: bookId,
  };
};

const onAddedToCart = (dispatch) => (id) => {
  dispatch(bookAddToCart(id));
};

const onDeletedFromCart = (dispatch) => (id) => {
  dispatch(bookDeletedFromCart(id));
};

export { onAddedToCart, onDeletedFromCart };
