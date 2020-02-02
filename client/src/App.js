import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import uniqid from 'uniqid';

import Header from './components/include/header/Header';
import Footer from './components/include/footer/Footer';
import FrontPage from './components/front-page/FrontPage';
import Auth from './components/auth/Auth';

// import Homburg from './components/items/item-categories/Homburg';
// import Bowler from './components/items/item-categories/Bowler';
import HatList from './components/items/HatList';
import HatDetails from './components/items/item-details/HatDetails';

import { mapCategories } from './constants/categoriesConst';

import { Context } from './context';

import './App.scss';

const App = () => {
  const [isAuth, setIsAuth] = useState(!!localStorage.token);

  const changeAuth = () => {
    const token = localStorage.token;

    setIsAuth(token ? true : false);
  }

  const removeToken = () => {
    localStorage.clear();
    window.dispatchEvent(new Event('storage'));
  }

  useEffect(() => {
    const tokenDate = JSON.parse(localStorage.getItem('tokenDate'));
    const expDate = tokenDate ? tokenDate.setDate(tokenDate.getDate() + 7) : null; 

    if(expDate && new Date() >= expDate) removeToken();

    window.addEventListener('storage', changeAuth);

    return () => {
      window.removeEventListener('storage', changeAuth);
    }
  }, []);

  return (
    <Router>
      <div className='app'>
        <Context.Provider value={{ isAuth, changeAuth, removeToken }}>
          <Header />
          <Switch>
            <Route exact path='/'>
              <FrontPage />
            </Route>
            <Route exact path='/auth'>
              <Auth />
            </Route>
            {mapCategories((category) => {
              return (
                <Route key={uniqid()} exact path={`/${category}`}>
                  <HatList category={category} />
                </Route>
              )
            })}          
            <Route exact path='/hats/details/:id' component={HatDetails} />
          </Switch>
        </Context.Provider>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
