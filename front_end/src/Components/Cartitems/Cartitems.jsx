import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopContext } from '../../Context/Shopcontext'
import remove_icon from '../Assets/remove.png'

export const Cartitems = () => {
    const {gettotalcart,all_product,cartitems,removefromcart}=useContext(ShopContext);

  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        
        {all_product.map((e) => {
                if (cartitems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>Rs{e.price}</p>
                                <button className='cartitems-quantity'>{cartitems[e.id]}</button>
                                <p>Rs.{e.price * cartitems[e.id]}</p>
                                <img className= 'cartitems-remove-icon' src={remove_icon} onClick={() => removefromcart(e.id)} alt="Remove item" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>CART TOTAL</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>Rs.{gettotalcart()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Rs.350</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>Rs.{gettotalcart()+350}</h3>
                    </div>
                </div>
                <button>Proceed to checkout</button>
            </div>
        </div>

    </div>
  )
}
export default Cartitems