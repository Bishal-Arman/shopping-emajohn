import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css' 

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    const [displayProducts,setDisplayProducts]=useState([])

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setDisplayProducts(data)
        })
    },[])

   useEffect(()=>{
      if(products.length){
        const savedCart=getStoredCart()
        const storedCart=[]
        for(const key in savedCart){
            // console.log(key,savedCart[key])
           const addedProduct=products.find(product=>product.key===key);
           if(addedProduct){
               const quantity=savedCart[key];
               addedProduct.quantity=quantity;
            //    console.log(addedProduct)
            storedCart.push(addedProduct)
           }
       
        }
        setCart(storedCart)
      }
   },[products])

    const handleAddToCart=(product)=>{
        // console.log(product.name)
        const newCart=[...cart,product]
        setCart(newCart)
        addToDb(product.key)
    }
   
    const handleSearch=event=>{
        // console.log(event.target.value)
        const searchText=event.target.value;
        const matchedProduct=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
        // console.log(matchedProduct.length)
        setDisplayProducts(matchedProduct)
    }

    return (
       <div>
           <div className='search'>
               <input onChange={handleSearch} type="text" placeholder='Search Product'/>
           </div>
           <div className='shop-container'>
            <div className='product-container'>
          <h2 style={{textAlign:'center',color:'#d76311'}}>Products:{products.length}</h2>
          {
              displayProducts.map(product=><Product
              key={product.key}
              handleAddToCart={handleAddToCart}
               product={product}
              ></Product>)
              
          }
            </div>
            <div className='cart-container'>
             <Cart
             cart={cart}
             ></Cart>
            </div>
        </div>
       </div>
    );
};

export default Shop;