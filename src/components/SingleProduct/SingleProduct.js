import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './SingleProduct.css';
const SingleProduct = (props) => {
    const { handelAddToCart, SingleProduct } = props;
    const { image, title, description, price, rating } = SingleProduct;


    const [prodcutQuantity, SetProductQuantity] = useState(1);

    const handelDecrement = () => {
        if (prodcutQuantity > 1) {
            SetProductQuantity(prevCount => prevCount - 1);
        }

    }

    const handelIncrement = () => {
        if (prodcutQuantity < 10) {
            SetProductQuantity(prevCount => prevCount + 1);
        }

    }


    return (
        <div className='product'>
            <img className='product-image' src={image} alt="" />
            <div className='product-info'>
                <p className='product-name' title={title}>{title}</p>
                <p>Price: ${price}</p>
                <p><small>Ratings: {rating.rate} stars</small></p>
            </div>

            <div className='product-quantity-counter'>
                <p>Quantity:</p>
                <div className='plus-minus-container'>

                    <button type='button' onClick={handelDecrement} className='minus-btn'>-</button>
                    <div className='quantity-txt'>{prodcutQuantity}</div>
                    <button type='button' onClick={handelIncrement} className='plus-btn'>+</button>
                </div>
            </div>



            <button onClick={() => handelAddToCart(SingleProduct, prodcutQuantity)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default SingleProduct;