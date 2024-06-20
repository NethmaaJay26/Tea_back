import React, { useEffect, useState } from 'react'
import './Popular.css'

import Item from '../Items/Item'

 const Popular = () => {

  const [bestsellers,setbestsellers] =useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/bestsellers')
    .then((response)=>response.json())
    .then((data)=>setbestsellers(data));
  },[])


  return (
    <div className='popular'>
        <h1>BEST SELLERS</h1>
        <hr/>
        <div className="popular-item">
            {bestsellers.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
            })}
        </div>


    </div>
  )
}
export default Popular