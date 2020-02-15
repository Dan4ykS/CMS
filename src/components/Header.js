import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/scss/Header.scss';

const HederBlock = ({ items }) => {
  const allItems = items.map((elem) => {
    const { name, value } = elem;
    return (
      <li className='header__item' key={name}>
        <Link key={name} to={name}>
          {value}
        </Link>
      </li>
    );
  });

  return (
    <div className='header'>
      <nav>
        <div className='header__left'></div>
        <div className='header__top'>
          <ul className='flexWrap'>{allItems}</ul>
        </div>
        <div className='header__right'></div>
      </nav>
    </div>
  );
};

HederBlock.defaultProps = {
  items: [
    { name: '/MainPage/', value: 'Главная' },
    { name: '/Bascket/', value: 'Корзина' },
  ],
};

HederBlock.propTypes = {
  items: PropTypes.array.isRequired,
};

export default HederBlock;
