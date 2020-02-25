import React from 'react';
import CartList from '../components/CartList';
import { compose, mapStateToProps, mapDispatchToProps } from '../utils/helpFuncsForRedux';
import { connect } from 'react-redux';
import withServices from '../hoc/withServices';
import componentLogic from '../hoc/componentLogic';

const CartPage = ({ shopingCart: { totalPrice } }) => {
  const price = totalPrice !== 0 ? <div className='totalPricc'>Сумма вашего заказа: {totalPrice}</div> : null;
  return (
    <>
      <h2>Ваш список товаров</h2>
      <CartList />
      {price}
    </>
  );
};

export default compose(withServices(), connect(mapStateToProps, mapDispatchToProps))(componentLogic(CartPage));
