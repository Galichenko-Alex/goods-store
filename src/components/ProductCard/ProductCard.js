import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/modules/cart/actions';
import './ProductCard.css';

function ProductCard({ id, breed, image, price }) {
  const dispatch = useDispatch();

  const handleAddProductToCart = () => {
    dispatch(addProductToCart({ id, isIncrement: true }));
  };

  return (
    <article className="product-card">
      <Link className="product-card__link" to={`/${id}`}>
        <img className="product-card__image" src={image} alt={breed} />
        <section className="product-card__info">
          <h3>{breed}</h3>
          <span>{price}</span>
        </section>
      </Link>
      <button className="product-card__button" onClick={handleAddProductToCart}>
        Add to cart
      </button>
    </article>
  );
}

export default ProductCard;
