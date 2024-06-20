import React, { useContext } from 'react';
import './Productdisplay.css';
import star from '../Assets/star.png';
import star2 from '../Assets/star2.png';
import { ShopContext } from '../../Context/Shopcontext';

const Productdisplay = (props) => {
  const { product } = props;
  const {addtocart} =useContext(ShopContext);


  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        
         <img className='productdisplay-main-img' src={product?.image} alt='' />
        
      </div>

      <div className='productdisplay-right'>
        <h1>{product?.name}</h1>
        <div className='productdisplay-right-stars'>
          <img src={star} alt='' />
          <img src={star} alt='' />
          <img src={star} alt='' />
          <img src={star} alt='' />
          <img src={star2} alt='' />
          <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>Rs.{product?.price}</div>
        <div className='productdisplay-right-description'>
          The primary ingredient is black tea leaves, sometimes blended with
          additional natural flavors, spices, or dried fruits for enhanced
          taste.
        </div>

        <div className="productdisplay-button"><button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button></div> 
        <p className='productdisplay-right-category'>
          <span>Category : </span> {product?.category}
        </p>
      </div>
    </div>
  );
};
export default Productdisplay;
