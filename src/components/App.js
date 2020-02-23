import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import Page404 from '../pages/404';
import HederBlock from '../components/Header';
import MainPage from '../pages/MainPage';
import CustomizingPage from '../pages/CustomizingPage';
import Footer from '../components/Footer';
import { mainItems, topItems, iconsForItems } from '../utils/headerConf';

const App = () => {
  return (
    <>
      <HederBlock iconsForItems={iconsForItems} topItems={topItems} mainItems={mainItems} />
      <div className='container content'>
        <Switch>
          <Route path='/' component={MainPage} exact />
          <Route path='/ProductPage/' component={ProductPage} exact />
          <Route path='/CartPage/' component={CartPage} exact />
          <Route path='/CustomizingPage/' component={CustomizingPage} exact />
          <Route component={Page404} exact />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
