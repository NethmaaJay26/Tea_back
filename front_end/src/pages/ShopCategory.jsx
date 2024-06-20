import React, { useContext } from 'react' 
import './CSS/Shopcategory.css'
import { ShopContext } from '../Context/Shopcontext'
import dropdown_icon from '../Components/Assets/arrow1.png'
import Item from '../Components/Items/Item'

export const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 25 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return  <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>

      </div>
  )
}
export default ShopCategory 