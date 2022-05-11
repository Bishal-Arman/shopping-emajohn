import React from 'react';
import'./Cart.css'

const Cart = (props) => {
  const {cart}=props;
  // console.log(cart)
  
  let totalQuantity=0;
  let total=0;
  for(const product of cart){
    if(!product.quantity){
      product.quantity=1
    }
      total=total+product.price*product.quantity;
      totalQuantity=totalQuantity+product.quantity;
  }

// const total=cart.reduce((previous,product)=>previous+product.price,0)


const shipping=total>0?15:0;

const tax=(total+shipping)*.10;

const grandTotal=total+tax+shipping;

    return (
        <div className='items'>
             <h3>Order Summary</h3>
              <h4>Items Ordered:{totalQuantity}</h4>
              <p>Total: <small>{total.toFixed(2)}</small></p>
              <p>Shipping: {shipping}</p>
              <p className='tax'>Tax: {tax.toFixed(2)}</p>
              <h3>Grand Total={grandTotal.toFixed(2)}</h3>

        </div>
    );
};

export default Cart;