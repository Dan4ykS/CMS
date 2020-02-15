import { fetchBooks, onAddedToCart, onDeletedFromCart } from '../actions/actions';

const compose = (...funcs) => (comp) => {
  return funcs.reduceRight((wrapped, func) => func(wrapped), comp);
};

const mapStateToProps = ({ bookList: { books, loading: booksLoading, error: booksError }, shopingCart: { cartItems, totalPrice } }) => {
  return { books, booksLoading, booksError, totalPrice, cartItems };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    onAddedToCart: onAddedToCart(dispatch),
    onDeletedFromCart: onDeletedFromCart(dispatch),
    // fetchCartItems: fetchCartItems(dispatch, bookstoreService),
  };
};

const feedbackMouseLeave = () => {
  document.querySelectorAll('.helperIcon').forEach((el) => {
    el.classList.remove('helperIcon_active');
    el.childNodes.forEach((el) => {
      el.classList.remove('fab_active');
    });
  });
};

const feedbackMouseEnter = () => {
  document.querySelectorAll('.helperIcon').forEach((el) => {
    el.classList.add('helperIcon_active');
    el.childNodes.forEach((el) => {
      el.classList.add('fab_active');
    });
  });
};

const showScrollTopArrow = () => {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      document.querySelectorAll('.fas').forEach((el) => {
        el.classList.add('fas_active');
      });
    } else {
      document.querySelectorAll('.fas').forEach((el) => {
        el.classList.remove('fas_active');
      });
    }
  });
};

export { mapStateToProps, compose, mapDispatchToProps, feedbackMouseLeave, feedbackMouseEnter, showScrollTopArrow };
