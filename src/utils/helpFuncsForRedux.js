import { fetchBooks, onAddedToCart, onDeletedFromCart, authorization, registration } from '../actions/actions';
import componentLogic from '../hoc/componentLogic';
import { connect } from 'react-redux';
import withServices from '../hoc/withServices';
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

const withStore = (Component, type = '') => compose(withServices(), connect(mapStateToProps, mapDispatchToProps))(componentLogic(Component, type));

export default withStore;
