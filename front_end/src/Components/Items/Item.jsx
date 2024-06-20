import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = (props) => {
  return (
    <div className='item'>
       <Link to ={`/product/${props.id}`}><img src={props.image} alt="" /></Link> 
        <p>{props.name}</p>
        <div className="item-prices">
            Rs.{props.price}
        </div>
    </div>
  )
}
export default Item