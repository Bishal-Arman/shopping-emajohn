import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {
    const {name,img,seller,price,stock,star}=props.product;
    // console.log(props)
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
    <div className='product'>
       <div>
        <img src={img} alt="" />
       </div>
       <div>
        <h3 className='product-name'>{name}</h3>
        <p>By {seller}</p>
        <h3>Price: {price}</h3>
        <p>Only {stock} left in stock - Order soon</p>
        <Rating
        initialRating={star}
        emptySymbol="fa-regular fa-star icon"
        fullSymbol="fa-solid fa-star icon"
        ></Rating>
        <br /><br />
        <button 
        onClick={()=>props.handleAddToCart(props.product)}
        className='btn-regular'>{element} add to cart</button>
      </div>

   </div>
    );
};

export default Product;