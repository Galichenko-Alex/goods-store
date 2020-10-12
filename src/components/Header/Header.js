import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleDisplayCart } from '../../store/modules/cart/actions';
import './Header.css';

function Header() {
  const dispatch = useDispatch();

  const handleToggleDisplayCart = () => {
    dispatch(toggleDisplayCart());
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <span>Logo</span>
        <button
          className="button button-cart"
          onClick={handleToggleDisplayCart}
        >
          Open cart
        </button>
      </nav>
    </header>
  );
}

export default Header;
