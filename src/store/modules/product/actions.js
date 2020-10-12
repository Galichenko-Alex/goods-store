import axios from 'axios';
import { routes } from '../../../constants';
import { SET_PRODUCT, SET_ERROR, SET_LOADING } from './constants';

export const setProduct = (payload) => ({
  type: SET_PRODUCT,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const getProduct = (productId) => (dispatch) => {
  setLoading(true);
  axios
    .get(routes.product(productId))
    .then((res) => {
      res.status === 200
        ? dispatch(setProduct(res.data))
        : dispatch(setError('Something wrong!'));
    })
    .catch((err) => {
      dispatch(setError('Product not found!'));
    })
    .finally(() => {
      setLoading(false);
    });
};
