import withServices from '../hoc/withServices';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchBooks } from '../actions/bookList';
import { onAddedToCart, onDeletedFromCart } from '../actions/shopingCart';
import { authorization, registration } from '../actions/userData';

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

const withStore = (Component) => compose(withServices(), connect(mapStateToProps, mapDispatchToProps))(Component);
export default withStore;
