import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/Shopcontext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import Productdisplay from '../Components/Productdisplay/Productdisplay';
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    console.log(all_product);
    console.log(productId);
    const foundProduct = all_product.find((e) => e.id === parseInt(productId));
    setProduct(foundProduct);
    console.log(foundProduct);
  }, [productId]);
  return (
    <div>
      <Breadcrum product={product} />
      <Productdisplay product={product} />
      <Descriptionbox/>
    </div>
  );
};
export default Product;
