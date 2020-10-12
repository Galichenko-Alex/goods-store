import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductToCart,
  delProductFromCart,
} from '../../../../store/modules/cart/actions';
import './CartItem.css';

function CardItem({ id, count }) {
  const dispatch = useDispatch();
  const { breed } = useSelector((s) =>
    s.products.products.find((product) => product.id === Number(id))
  );

  const handleIncCount = () => {
    dispatch(addProductToCart({ id, isIncrement: true }));
  };

  const handleDecCount = () => {
    dispatch(addProductToCart({ id, isIncrement: false }));
  };

  const handleDelItemFromCart = () => {
    dispatch(delProductFromCart(id));
  };

  return (
    <div className="cart-item">
      <span>Name: {breed}</span>
      <button onClick={handleDecCount}>-</button>
      <span>Count: {count}</span>
      <button onClick={handleIncCount}>+</button>
      <button onClick={handleDelItemFromCart}>Del</button>
    </div>
  );
}

export default CardItem;
