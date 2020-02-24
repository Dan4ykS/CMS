import { fetchBooks, onAddedToCart, onDeletedFromCart } from '../actions/actions';
import { Link } from 'react-router-dom';
import { Link as LinkToTop } from 'react-scroll';
import React from 'react';

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
      document.querySelectorAll('footer .fas').forEach((el) => {
        el.classList.add('fas_active');
      });
    } else {
      document.querySelectorAll('footer .fas').forEach((el) => {
        el.classList.remove('fas_active');
      });
    }
  });
};

const headerFixMenu = () => {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      document.querySelector('.header__main').classList.add('header_active');
    } else {
      document.querySelector('.header__main').classList.remove('header_active');
    }
  });
};
const createElementWithIcon = (icon, item, className) => {
  const { className: icoclassName } = icon;
  const { name, value } = item;
  return (
    <div className='flexWrap' key={Math.random()}>
      <Link key={Math.random()} to={name}>
        <i className={icoclassName} key={Math.random()}></i>
      </Link>
      <li className={className} key={Math.random()}>
          <Link key={Math.random()} to={name}>
            {value}
          </Link>
      </li>
    </div>
  );
};

const createElementWithOutIcon = (item, className) => {
  const { name, value } = item;
  return (
    <li className={className} key={name}>
      {/* <LinkToTop to='header' smooth={true}> */}
        <Link key={name} to={name}>
          {value}
        </Link>
      {/* </LinkToTop> */}
    </li>
  );
};

const createItems = (items, className, iconsForItems = []) => {
  return items.map((elem, index) => {
    const item = iconsForItems.length === 0 ? createElementWithOutIcon(elem, className) : createElementWithIcon(iconsForItems[index], elem, className);
    return <React.Fragment key={Math.random()}>{item}</React.Fragment>;
  });
};

const redirectToLink = (link) => {
  window.open(link);
};

export { mapStateToProps, compose, mapDispatchToProps, feedbackMouseLeave, feedbackMouseEnter, showScrollTopArrow, headerFixMenu, createItems, redirectToLink };
