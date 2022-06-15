import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleProduct.css';
const SingleProduct = (props) => {
    const { handelAddToCart, SingleProduct } = props;
    const { image, title, description, price, rating } = SingleProduct;

    return (
        <div className='product'>
            <img className='product-image' src={image} alt="" />
            <div className='product-info'>
                <p className='product-name'>{title}</p>
                <p>Price: ${price}</p>
                <p><small>Ratings: {rating.rate} stars</small></p>
            </div>

            <button onClick={()=>handelAddToCart(SingleProduct)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default SingleProduct;