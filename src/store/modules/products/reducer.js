import produce from 'immer';
import { SET_PRODUCTS, SET_ERROR, SET_LOADING } from './constants';

const initialState = {
  products: [],
  error: null,
  loading: false,
};

export default produce((state, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      state.products = action.payload;
      break;
    }
    case SET_LOADING: {
      state.loading = action.payload;
      break;
    }
    case SET_ERROR: {
      state.error = action.payload;
      break;
    }
    default: {
      return state;
    }
  }
}, initialState);
