import {
  TOGGLE_DISPLAY_CART,
  ADD_PRODUCT_TO_CART,
  DEL_PRODUCT_FROM_CART,
} from './constants';

export const toggleDisplayCart = () => ({
  type: TOGGLE_DISPLAY_CART,
});

export const addProductToCart = (payload) => ({
  type: ADD_PRODUCT_TO_CART,
  payload,
});

export const delProductFromCart = (payload) => ({
  type: DEL_PRODUCT_FROM_CART,
  payload,
});
