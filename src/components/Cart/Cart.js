import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import CardItem from './components/CardItem';
import './Cart.css';

function Cart() {
  const { products, isDisplayCart } = useSelector((s) => s.cart);

  return (
    <aside
      className={cx('cart', {
        cart__close: !isDisplayCart,
      })}
    >
      {Object.entries(products).map(([id, count]) => (
        <CardItem key={id} {...{ id, count }} />
      ))}
    </aside>
  );
}

export default Cart;
