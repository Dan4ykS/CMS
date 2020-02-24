import React from 'react';
import StrangeComp from '../components/StrangeCopm'
import '../styles/scss/Login.scss';

const checkUser = (e) => {
  e.preventDefault();
  let data = {};
  document.querySelectorAll('.authorization .form-control').forEach((el) => {
    data[el.name] = el.value;
  });
  console.log(data);
  fetch('http://127.0.0.1:8000/api/auth_user/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  })
    .then((data) => { 
      if (!data.ok) {
        throw new Error('Такого пользователя нет!')
      } else { 
        console.log('Такой пользователь существует !')
      }
    })
    .catch((err) => console.log(err));
};

const LoginPage = () => {
  return (
    <>
      <h2>Страница авторизации</h2>
      <div className='row'>
        <div className='authorization col-lg-6'>
          <form onSubmit={(e) => checkUser(e)}>
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
            <div className='form-group row'>
              <div className='col-12 text-right'>
                <button type='submit' className='btn btn-primary'>
                  Войти
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className='col-lg-6'></div>
      </div>
    </>
  );
};

export default LoginPage;
