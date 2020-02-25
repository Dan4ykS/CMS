import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import Page404 from '../pages/404';
import Heder from '../components/Header';
import MainPage from '../pages/MainPage';
import CustomizingPage from '../pages/CustomizingPage';
import LoginPage from '../pages/LoginPage';
import Footer from '../components/Footer';
import RegistrationPage from '../pages/RegistrationPage';
import { compose, mapStateToProps, mapDispatchToProps } from '../utils/helpFuncsForRedux';
import componentLogic from '../hoc/componentLogic';
import { connect } from 'react-redux';
import withServices from '../hoc/withServices';
import { mainItems, topItems, iconsForItems } from '../utils/headerConf';

const App = ({ userData: { userName } }) => {
  console.log(userName)
  return (
    <>
      <Heder iconsForItems={iconsForItems} topItems={topItems} mainItems={mainItems} />
      <div className='container content'>
        <Switch>
          <Route path='/' component={MainPage} exact />
          <Route path='/Product/' component={ProductPage} exact />
          <Route path='/Cart/' component={CartPage} exact />
          <Route path='/Customizing/' component={CustomizingPage} exact />
          <Route path='/Login/' component={LoginPage} exact />
          <Route path='/Registration/' component={RegistrationPage} exact />
          <Route component={Page404} exact />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default compose(
  withServices(),
  connect(mapStateToProps, mapDispatchToProps)
)(componentLogic(App));
