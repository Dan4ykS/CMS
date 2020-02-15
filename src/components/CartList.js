import React from 'react';
import { compose, mapStateToProps, mapDispatchToProps } from '../utils/helpFuncs';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/withBookstoreService';
import componentLogic from '../hoc/componentLogic';
import ChangeCopies from './ChangeCopies';
import '../styles/scss/CartList.scss';

const CartList = ({ cartItems, onAddedToCart, onDeletedFromCart}) => {
  if (cartItems.length === 0) {
    return <p>Вы пока не выбрали ни одного товара</p>;
  }
  return (
    <>
      {cartItems.map((item) => {
        return (
          <div className='cartItem col-12' key={item.id}>
            <div className='flexWrap'>
              <img className='cartItem__img' src={item.img} alt={`img:${item.id}`} />
              <div className='cartItem__info'>Книга "{item.title}"</div>
              <div className='cartItem__copies'>
                <ChangeCopies onDeletedFromCart={onDeletedFromCart} bookId={item.id} onAddedToCart={onAddedToCart} copies={item.copies} />
              </div>
              <div className='cartItem__price'>Сумма: {item.price}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(componentLogic(CartList, 'cartList'));
