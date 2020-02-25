import { fetchBooks, onAddedToCart, onDeletedFromCart, authorization, registration } from '../actions/actions';

const compose = (...funcs) => (comp) => {
  return funcs.reduceRight((wrapped, func) => func(wrapped), comp);
};

const mapStateToProps = ({ bookList, shopingCart, userData }) => {
  return { bookList, shopingCart, userData };
};

const mapDispatchToProps = (dispatch, { services }) => {
  const actions = {
    fetchBooks: fetchBooks(dispatch, services),
    onAddedToCart: onAddedToCart(dispatch),
    onDeletedFromCart: onDeletedFromCart(dispatch),
    authorization: authorization(dispatch, services),
    registration: registration(dispatch, services),
  };
  return { actions };
};

export { mapStateToProps, compose, mapDispatchToProps };
