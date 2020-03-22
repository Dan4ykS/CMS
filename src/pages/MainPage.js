import React from 'react';
import MaterialUiForm from '../components/MaterialUiForm';

const MainPage = () => {
  return (
    <>
      <h2>Главная страница! </h2>
      <MaterialUiForm />
      <button
        className='btn-warning'
        onClick={() => {
          fetch('http://127.0.0.1:8000/api/getUsers')
            .then((resp) => resp.json())
            .then((data) => console.log(data));
        }}
      >
        Получить данные
      </button>
    </>
  );
};
export default MainPage;
