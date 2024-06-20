import React, { createContext, useEffect, useState } from "react";


export const ShopContext = createContext(null);

const getdefaultcart = ()=>{
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{

    const [all_product,setAll_Product] = useState([]);
    const [cartitems,setcartitems]=useState(getdefaultcart());

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-type':'application/json',
                },
                body:"",
            }).then((response)=>response.json())
            .then((data)=>setcartitems(data));
        }

    },[])
    

    const addtocart =(itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }
    
    const removefromcart =(itemId)=>{
        setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }

        }
    
    
    const gettotalcart = ()=>{
        let totalamount=0;
        for(const item in cartitems){
            if (cartitems[item]>0) 
                {
                    let iteminfo =all_product.find((product)=>product.id===Number(item))
                    totalamount +=iteminfo.price *cartitems[item];
            }
            
        }
        return totalamount;
    }
    
    const gettotalcartitems =()=>{
        let totalitem = 0;
        for(const item in cartitems)
            {
                if(cartitems[item]>0){
                    totalitem+=cartitems[item];
                }
            }
            return totalitem;
    }
    

    const contextValue = {gettotalcartitems, gettotalcart, all_product,cartitems,addtocart,removefromcart};

    
    return(
           <ShopContext.Provider value={contextValue}>
                {props.children}
           </ShopContext.Provider>
    )

}
export default ShopContextProvider;