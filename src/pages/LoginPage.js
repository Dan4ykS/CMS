import React from 'react';
import withStore from '../utils/helpFuncsForRedux';
import { Redirect } from 'react-router-dom';
import { workWithUserApi } from '../utils/helpFuncsForBrouser';
import { Link } from 'react-router-dom';
import '../styles/scss/Login.scss';

const LoginPage = ({ userData: { isAuth }, actions: { authorization } }) => {
  if (isAuth) {
    return <Redirect to='/' />;
  }
  return (
    <>
      <h2>Страница авторизации</h2>
      <div className='row'>
        <div className='authorization col-lg-6'>
          <form onSubmit={(e) => workWithUserApi(e, authorization, '.authorization')}>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Логин:</label>
              <div className='col-sm-10'>
                <input name='userName' type='text' className='form-control' placeholder='Введите ваш логин'></input>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Пароль:</label>
              <div className='col-sm-10'>
                <input name='password' type='password' className='form-control' placeholder='Введите ваш пароль'></input>
              </div>
            </div>
            <div className='btn-group col-8 offset-4' role='group'>
              <button type='submit' className='btn btn-primary'>
                Войти
              </button>
              <Link to='/Registration/' className='btn btn-primary'>
                Зарегистрироваться
              </Link>
            </div>
          </form>
        </div>
        <div className='col-lg-6'></div>
      </div>
    </>
  );
};

export default withStore(LoginPage);
