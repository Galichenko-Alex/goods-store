import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getProduct } from '../../store/modules/product/actions';

function Product() {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((s) => s.product);
  const { productId } = useParams();

  useEffect(() => {
    productId !== product?.id && dispatch(getProduct(productId));
  }, []);

  if (error) return error;
  if (loading) return <Loader />;

  return (
    <div className="products">
      <ProductCard {...product} />
    </div>
  );
}

export default Product;
