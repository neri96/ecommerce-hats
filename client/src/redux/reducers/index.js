import { combineReducers } from 'redux';

import season from './season';
// import categories from './products';
import products from './products';
import productsAll from './productsAll';
import token from './token';
import logInErr from './authErr/logInErr';
import regErr from './authErr/regErr';
import cart from './cart';
import cartData from './cartData';

export default combineReducers({
    season,
    // ...categories
    products,
    productsAll,
    token,
    logInErr,
    regErr,
    cart,
    cartData
})