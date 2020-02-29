import React from 'react';
import withStore from '../utils/helpFuncsForRedux';
import { Redirect } from 'react-router-dom';

const AccountPage = ({ userData: { isAuth } }) => {
  if (!isAuth) {
    return <Redirect to='/' />;
  }
  return <h2>Здесь будет личный кабинет</h2>;
};

export default withStore(AccountPage);
