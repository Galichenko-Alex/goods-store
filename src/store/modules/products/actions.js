import axios from 'axios';
import { routes } from '../../../constants';
import { SET_PRODUCTS, SET_ERROR, SET_LOADING } from './constants';

export const setProducts = (payload) => ({
  type: SET_PRODUCTS,
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

export const getProducts = () => (dispatch) => {
  setLoading(true);
  axios
    .get(routes.products())
    .then((res) => {
      res.status === 200
        ? dispatch(setProducts(res.data))
        : dispatch(setError('Something wrong!'));
    })
    .catch((err) => {
      dispatch(setError('Products not found!'));
    })
    .finally(() => {
      setLoading(false);
    });
};
