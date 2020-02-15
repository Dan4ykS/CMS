import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Page404 extends React.Component {
  state = {
    redirect: false,
  };

  redirectToMainPage() {
    this.setState({ redirect: !this.state.redirect });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/' />;
    }
    return (
      <>
        <h1>Ошибка, страница не найдена</h1>
        <button onClick={() => this.redirectToMainPage()}>На главную </button>
      </>
    );
  }
}
