import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/modules/products/actions';
import Loader from '../../components/Loader';
import ProductCard from '../../components/ProductCard';
import './Products.css';

function Products() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((s) => s.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (error) return error;
  if (loading) return <Loader />;

  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Products;
