import React from 'react';
import CartList from '../components/CartList';
import { compose, mapStateToProps, mapDispatchToProps } from '../utils/helpFuncs';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/withBookstoreService';
import componentLogic from '../hoc/componentLogic';

const CartPage = ({ totalPrice }) => {
  const price = totalPrice !== null ? <div className='totalPricc'>Сумма вашего заказа: {totalPrice}</div> : null;
  return (
    <>
      <h2>Ваш список товаров</h2>
      <CartList />
      {price}
    </>
  );
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(componentLogic(CartPage));
