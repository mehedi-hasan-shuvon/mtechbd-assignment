import { faCircleMinus, faDeleteLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleCartItem.css'
const SingleCartItem = (props) => {
    const { product, handelRemoveProduct } = props;
    const { image, title, description, price, rating, quantity } = product;

    let itemSubToatalPrice = price * quantity;

    return (
        <div className='single-cart-item'>

            <img className='cart-item-img' src={image} alt="" />
            <div className='cart-single-item-details'>
                <p className='cart-item-title' title={title}>{title}</p>
                {/* <input type="number" defaultValue={quantity} id="quantity" name="quantity" min="1" max="20" /> */}
                <p className='cart-item-price'> price: ${price} X <span>Quantity: {quantity}</span> = {itemSubToatalPrice.toFixed(2)}</p>
            </div>
            <div  className="delete-cart-item">
                <FontAwesomeIcon onClick={() => handelRemoveProduct(product)} className='delete-icon' icon={faCircleMinus}></FontAwesomeIcon>
            </div>

        </div>
    );
};

export default SingleCartItem;