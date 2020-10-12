import produce from 'immer';
import {
  TOGGLE_DISPLAY_CART,
  ADD_PRODUCT_TO_CART,
  DEL_PRODUCT_FROM_CART,
} from './constants';

const initialState = {
  products: {},
  isDisplayCart: false,
};

export default produce((state, action) => {
  switch (action.type) {
    case DEL_PRODUCT_FROM_CART: {
      delete state.products[action.payload];
      break;
    }
    case ADD_PRODUCT_TO_CART: {
      const { id, isIncrement } = action.payload;
      if (!state.products[id]) state.products[id] = 0;
      state.products[id] += isIncrement ? 1 : -1;
      break;
    }
    case TOGGLE_DISPLAY_CART: {
      state.isDisplayCart = !state.isDisplayCart;
      break;
    }
    default: {
      return state;
    }
  }
}, initialState);
