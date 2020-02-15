import React from 'react';
import componentLogic from '../hoc/componentLogic';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps, compose } from '../utils/helpFuncs';
import withBookstoreService from '../hoc/withBookstoreService';
import '../styles/scss/BlockList.scss';

const BookList = ({ books, onAddedToCart }) => {
  const handlerClick = (id) => {
    onAddedToCart(id)
    console.log('работает')
   }
  return (
    <div className='row'>
      {books.map((book) => {
        return (
          <div key={book.id} className='infoBlock flexWrap'>
            <div className='infoBlock__img'>
              <img src={book.img} alt={`Книга ${book.id}`} />
            </div>
            <div className='infoBlock__content'>
              <h2>{book.title}</h2>
              <div className='description'>{book.description}</div>
              <div className='flexWrap'>
                <div className='buy'>
                  <span>{book.price}</span> Рублей
                </div>
                <button onClick={() => handlerClick(book.id)}>В корзину</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(componentLogic(BookList, 'bookList'));
