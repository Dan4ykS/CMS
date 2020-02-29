import React from 'react';
import withStore from '../utils/helpFuncsForRedux';
import { Redirect } from 'react-router-dom';
import { workWithUserApi } from '../utils/helpFuncsForBrouser';

const RegistrationPage = ({ userData: { isAuth }, actions: { registration } }) => {
  if (isAuth) {
    return <Redirect to='/' />;
  }
  return (
    <>
      <h2>Регистрация</h2>
      <div className='row justify-content-center'>
        <div className='registration col-lg-6'>
          <form
            onSubmit={(e) => {
              workWithUserApi(e, registration, '.registration');
            }}
          >
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Логин:</label>
              <div className='col-sm-10'>
                <input name='userName' type='text' className='form-control' placeholder='Придумайте логин'></input>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Email:</label>
              <div className='col-sm-10'>
                <input name='email' type='text' className='form-control' placeholder='Введите ваш Email'></input>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-2 col-form-label'>Пароль:</label>
              <div className='col-sm-10'>
                <input name='password' type='password' className='form-control' placeholder='Придумайте пароль'></input>
              </div>
            </div>
            <div className='row justify-content-center'>
              <button type='submit' className='btn btn-primary col-6'>
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default withStore(RegistrationPage);
// onSubmit={(e) => checkUser(e, authorization)}
