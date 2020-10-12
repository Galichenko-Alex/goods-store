import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import products from './modules/products/reducer';
import product from './modules/product/reducer';
import cart from './modules/cart/reducer';

const rootReducer = combineReducers({
  products,
  product,
  cart,
});

export default createStore(rootReducer, applyMiddleware(thunk));
