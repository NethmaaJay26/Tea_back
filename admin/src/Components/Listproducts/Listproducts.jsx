import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Listproducts.css'
import remove_icon from '../../assets/remove.png'
import edit_icon from '../../assets/edit_icon.png'

const Listproducts = () => {

  const [allproducts,setallproducts] =useState([]);
  const fetchInfo = async ()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setallproducts(data)});

  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async(id)=> {
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }



  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Category</p>
        <p>Edit Item</p> 
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts"> 
        <hr />
        {allproducts.map((product, index) => (
          <div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.image} alt="" className='listproducts-product-icon' />
            <p>{product.name}</p>
            <p>Rs.{product.price}</p>
            <p>{product.category}</p>
            
            <div className="listproduct-edit"> 
              <Link to={`/editproduct/${product.id}`}>
                <img
                  src={edit_icon}
                  alt="Edit"
                  className='listproduct-icon'
                />
              </Link>
            </div>
  
            <img
              onClick={() => remove_product(product.id)}
              className='listproduct-remove'
              src={remove_icon}
              alt="Remove"
            />
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
}

export default Listproducts